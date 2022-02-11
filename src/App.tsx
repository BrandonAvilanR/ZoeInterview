import { useEffect, useState } from 'react';

interface Agent {
  id: number;
  name: string;
  avatar: string;
  income: number;
  visible: boolean;
}

function App() {

  const [data, setData] = useState<Agent[]>([]);
  const [matchValue, setMatchValue] = useState(0);
  const [agentList, setAgentsList] = useState<Agent[]>([]);
  const [showNumberAgent, setShowNumberAgent] = useState(3)

  useEffect(() => {
    fetch('./data/agents_list.json')
      .then(res => res.json())
      .then(data => setData(data.map((a: Agent) => {
        return {
          ...a,
          visible: true
        }
      })));
  }, [])

  const handleMatch = (value: number) => {
    const max = value + 10000;
    const min = value - 10000;
    const aux = data.filter(agent => agent.income <= max && agent.income >= min);
    setAgentsList(aux);
  }

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

  const handleSorting = (key: keyof Agent, sort: string) => {
    const aux = [...agentList].sort((a, b) => {
      if (a[key] < b[key]) {
        return sort === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return sort === 'asc' ? 1 : -1;
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
    <>
      <input type="text" name="value" id="value" maxLength={5} onChange={e => setMatchValue(+e.target.value)} />
      <button onClick={e => handleMatch(matchValue)}>Match</button>
      <button onClick={handleLess}>Show Less</button>
      <button onClick={handleMore}>Show More</button>

      <button onClick={() => handleSorting('name', 'asc')}>Sort Ascendent By Name</button>
      <button onClick={() => handleSorting('name', 'des')}>Sort Descendent By Name</button>

      <button onClick={() => handleSorting('income', 'asc')}>Sort Ascendent By Income</button>
      <button onClick={() => handleSorting('income', 'des')}>Sort Descendent By Income</button>


      {agentList.filter(a => a.visible === true).slice(0, showNumberAgent).map(agent =>
        <div style={{ padding: '10px' }} onClick={e => handleHide(agent.id)}>
          <h4>{agent.name}</h4>
          <h4>{agent.income}</h4>
        </div>)}

    </>
  );
}

export default App;
