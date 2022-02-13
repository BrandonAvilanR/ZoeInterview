import { Agent } from './Agent.Interface';

export interface AgentState {
  agentList: Agent[];
  income: number | undefined;
}