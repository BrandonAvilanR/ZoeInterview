import { Agent } from '../../interfaces/agent.interface';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AgentCard, AgentsContainer, FilterContainer, MatchContainer, ShowContainer } from './match.components';
import { AgentState } from '../../interfaces/agentState.interface';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import User from '../../images/user.png';
import { BlueIconButton } from '../../styles/components';
import { FaArrowLeft } from 'react-icons/fa';


export const Match = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { agentList: list, income } = state as AgentState;
  const [agentList, setAgentsList] = useState<Agent[]>(list || []);
  const [showNumberAgent, setShowNumberAgent] = useState(3);
  const [filter, setFilter] = useState<string>();

  const handleLess = () => {
    if (showNumberAgent === 3)
      return
    let aux = showNumberAgent;
    setShowNumberAgent(aux - 3);
  }

  const handleMore = () => {
    let aux = showNumberAgent;
    setShowNumberAgent(aux + 3);
  }

  const handleSorting = (key: keyof Agent, label: string, asc: boolean = true) => {
    setFilter(label);
    const aux = [...agentList].sort((a, b) => {
      if (a[key] < b[key]) {
        return asc ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return asc ? 1 : -1;
      }
      return 0
    });
    setAgentsList(aux);
  }

  const handleHide = (id: number) => {
    const aux = [...agentList];
    aux.map(agent => agent.id === id ? agent.visible = false : null)
    setAgentsList(aux);
  }
  return (
    <MatchContainer>

      <h2 style={{ marginBottom: 0 }}>Your matches</h2>
      <p style={{ marginTop: 0 }}>Your income: <b>${income}</b></p>

      {agentList.length > 0 ?
        <>
          <FilterContainer>
            <div>
              <p>Order agents by</p>
              <DropdownButton id="dropdown-basic-button" title={filter || 'Select...'}>
                <Dropdown.Item onClick={() => handleSorting('name', 'Name (A-Z)')}>Name (A-Z)</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSorting('id', 'ID')}>ID</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSorting('income', 'Income: High first')}>Income: High first</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSorting('income', 'Income: Low first', false)}>Income: Low first</Dropdown.Item>
              </DropdownButton>
            </div>
            <BlueIconButton
              onClick={() => navigate('home')}>
              Go Back <FaArrowLeft />
            </BlueIconButton>
          </FilterContainer>

          <AgentsContainer>

            {agentList.filter(a => a.visible === true).slice(0, showNumberAgent).map(agent =>
              <AgentCard key={agent.id} onClick={() => handleHide(agent.id)}>
                <img src={User} alt="user profile" />
                <div>
                  <p><b>{agent.name}</b></p>
                  <p>ID:  {agent.id}</p>
                </div>
                <p className='income'>Income  <b>{agent.income}</b></p>
              </AgentCard>)
            }
          </AgentsContainer>

          <ShowContainer>
            <p className='less' onClick={handleLess}>Show  Less  -</p>
            <p className='more' onClick={handleMore}>Show  More  +</p>
          </ShowContainer>
        </>
        :
        <>
          <p>No available Agents based on your income. Please try a different income value.</p>
          <BlueIconButton
            onClick={() => navigate('home')}>
            Go Back <FaArrowLeft />
          </BlueIconButton>
        </>
      }


    </MatchContainer>
  )
}