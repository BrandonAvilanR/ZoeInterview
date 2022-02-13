import { Home } from '../routes/home/Home';
import { MemoryRouter } from 'react-router-dom';
import { getByRole, render, fireEvent } from '@testing-library/react';

describe('Match Test', () => {

  it('Mount Match', function () {
    const { container } = render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <Home />
      </MemoryRouter>
    );

    const matchInput = getByRole(container, 'textbox') as HTMLInputElement;
    fireEvent.change(matchInput, { target: { value: "80000" } });
    expect(matchInput.value).toBe("80000");

    const matchBtn = getByRole(container, 'button', {
      name: /get matches/i
    });

    fireEvent.click(matchBtn);

  })
});