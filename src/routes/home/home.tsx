import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Agent } from '../../interfaces/agent.interface';
import { getAgents } from '../../services/agents.services';
import { HomeContainer, InputContainer, InputLabel, StyledInput } from './home.components';
import People from '../../images/People.png';
import { FaArrowRight } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';
import { AgentState } from '../../interfaces/agentState.interface';
import { ButtonContainer, BlueIconButton } from '../../styles/components';

export const Home = () => {

  const navigate = useNavigate();
  const [data, setData] = useState<Agent[]>([]);
  const [matchValue, setMatchValue] = useState<number>();
  const INTERVAL = 10000;

  useEffect(() => {
    getAgents()
      .then(res => setData(res))
      .catch(console.log);
  }, [])

  const handleMatch = (value: number) => {
    const max = value + INTERVAL;
    const min = value - INTERVAL;
    const list = data.filter(({ income }) => income <= max && income >= min);
    const agentState: AgentState = {agentList: list, income: matchValue};
    navigate('/match', { state: agentState } )
  }

  return (
    <HomeContainer>
      <img src={People} alt="People" />
      <h1 style={{ marginBottom: 0 }}>Find the best agent for you!</h1>
      <p>Fill the information below to get your matches.</p>
      <InputContainer>
        <InputLabel>Current income</InputLabel>
        <BsCurrencyDollar />
        <StyledInput
          type="text"
          name="incomeValue"
          id="incomeValue"
          maxLength={5}
          onChange={e => setMatchValue(+e.target.value)}
        />
      </InputContainer>
      <ButtonContainer>
        <BlueIconButton
          disabled={!matchValue}
          onClick={() => handleMatch(matchValue as number)}>
          Get Matches <FaArrowRight />
        </BlueIconButton>
      </ButtonContainer>
    </ HomeContainer>
  );
}