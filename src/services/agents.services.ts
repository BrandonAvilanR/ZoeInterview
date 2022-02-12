import { Agent } from '../interfaces/agent.interface';

export const getAgents = async (): Promise<Agent[]> => {
  return await fetch('./data/agents_list.json')
    .then(res => res.json())
    .then(data => data.map((agent: Agent) => {
      return {
        ...agent,
        visible: true
      }
    }));
}