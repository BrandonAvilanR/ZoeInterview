import { Match } from '../routes/match/Match';
import { fireEvent, getByText, render, getByRole, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const state = {
  agentList: [
    {
      "id": 1,
      "name": "Michael",
      "visible": true,
      "income": 85273
    },
    {
      "id": 2,
      "name": "James",
      "visible": true,
      "income": 85750
    },
    {
      "id": 3,
      "name": "Nicholas",
      "visible": true,
      "income": 85383
    },
    {
      "id": 4,
      "name": "Jennifer",
      "visible": true,
      "income": 85716
    },
    {
      "id": 5,
      "name": "Christopher",
      "visible": true,
      "income": 85014
    },
    {
      "id": 6,
      "name": "Michael",
      "visible": true,
      "income": 85751
    },
    {
      "id": 7,
      "name": "Patricia",
      "visible": true,
      "income": 95032
    },
    {
      "id": 8,
      "name": "Beth",
      "visible": true,
      "income": 94556
    },
  ],
  income: 80000
}

describe('Match Test', () => {

  it('Mount Match with data', function () {
    const { container } = render(
      <MemoryRouter initialEntries={[{ pathname: '/', state }]}>
        <Match />
      </MemoryRouter>
    );

    let cardsLength = container.querySelectorAll('#AgentCard').length;
    expect(cardsLength).toBeGreaterThanOrEqual(3);
    expect(cardsLength).toBeLessThanOrEqual(3);

    const showMoreBtn = getByText(container, /show more \+/i);
    expect(showMoreBtn).toBeTruthy();

    fireEvent.click(showMoreBtn);
    cardsLength = container.querySelectorAll('#AgentCard').length;
    expect(cardsLength).toBeGreaterThan(3);

    const card = container.querySelector('#AgentCard') as Element;
    expect(card).toBeTruthy();
    fireEvent.click(card);

    const showLessBtn = getByText(container, /show less \-/i);
    expect(showLessBtn).toBeTruthy();

    fireEvent.click(showLessBtn);
    cardsLength = container.querySelectorAll('#AgentCard').length;
    expect(cardsLength).toBeLessThanOrEqual(3);
    fireEvent.click(showLessBtn);

    const goBackBtn = getByRole(container, 'button', {
      name: /go back/i
    });
    expect(goBackBtn).toBeTruthy();
    fireEvent.click(goBackBtn);
  })


  it('Mount Match without data', function () {
    state.agentList = [];
    const { container } = render(
      <MemoryRouter initialEntries={[{ pathname: '/', state }]}>
        <Match />
      </MemoryRouter>
    );
    expect(container.querySelector('#WithOutData')).toBeTruthy();

    const goBackBtn = getByRole(container, 'button', {
      name: /go back/i
    });
    expect(goBackBtn).toBeTruthy();
    fireEvent.click(goBackBtn);

  })
});
