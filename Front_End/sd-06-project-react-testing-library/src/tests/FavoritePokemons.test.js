import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { FavoritePokemons } from '../components';
import Data from '../data';

test('Teste se é exibido na tela a mensagem No favorite pokemon found', () => {
  const { getByText } = render(
    <MemoryRouter>
      <FavoritePokemons />
    </MemoryRouter>,
  );
  const messageScreen = getByText(/No favorite pokemon found/i);
  expect(messageScreen).toBeInTheDocument();
});

test('Teste se é exibido todos os cards de pokémons favoritados', () => {
  const { queryByText } = render(
    <MemoryRouter>
      <FavoritePokemons pokemons={ [Data[0]] } />
    </MemoryRouter>,
  );
  const cardPokemon = queryByText('Pikachu');
  expect(cardPokemon).toBeInTheDocument();
});

test('Teste se Não é exibido nenhum card de pokémon não favoritado', () => {
  const { queryByText } = render(
    <MemoryRouter>
      <FavoritePokemons />
    </MemoryRouter>,
  );
  const notCardPokemon = queryByText('Rapidash');
  expect(notCardPokemon).not.toBeInTheDocument();
});
