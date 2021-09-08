import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from '../App';

test('renders a reading with the text `Pokédex`', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const heading = getByText(/Pokédex/i);
  const urlHome = getByText('Home');
  const urlAbout = getByText('About');
  const urlFavorite = getByText(/Favorite Pokémons/i);

  expect(heading).toBeInTheDocument();
  expect(urlHome).toBeInTheDocument();
  expect(urlAbout).toBeInTheDocument();
  expect(urlFavorite).toBeInTheDocument();
});
