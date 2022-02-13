import { getAgents } from "../../services/Agents.Service";

describe('Agent service test', () => {
  it('get Agents', function() {
    const service = getAgents();
    expect(service instanceof Promise).toBeTruthy();
  });
});