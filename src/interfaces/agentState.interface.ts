import { Agent } from './agent.interface';

export interface AgentState {
  agentList: Agent[];
  income: number | undefined;
}