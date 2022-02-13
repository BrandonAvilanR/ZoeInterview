import { Agent } from '../interfaces/Agent.Interface';

export const getAgents = async (): Promise<Agent[]> => {
  return await fetch('./data/agents_list.json')
    .then(res => res.json())
    .then(data => data.map((agent: Agent) => ({ ...agent, visible: true })));
}