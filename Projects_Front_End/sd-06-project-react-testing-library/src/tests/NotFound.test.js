import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { NotFound } from '../components';

test('Teste se página contém um heading h2 com o texto Page requested not found', () => {
  const { getByText } = render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>,
  );
  const pokedexInformation = getByText(/Page requested not found/i);
  expect(pokedexInformation.tagName).toBe('H2');
});

test('Teste se página mostra a imagem', () => {
  const { getByAltText } = render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>,
  );
  const image = getByAltText('Pikachu crying because the page requested was not found');
  expect(image.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
