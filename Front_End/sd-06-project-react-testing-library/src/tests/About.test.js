import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { About } from '../components';

test('Teste se a página contém as informações sobre a Pokédex', () => {
  const { getByText } = render(
    <MemoryRouter>
      <About />
    </MemoryRouter>,
  );
  const pokedexInformation = getByText(/About Pokédex/i);
  expect(pokedexInformation).toBeInTheDocument();
});

test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
  const { getByText } = render(
    <MemoryRouter>
      <About />
    </MemoryRouter>,
  );
  const pokedexInformation = getByText(/About Pokédex/i);
  expect(pokedexInformation.tagName).toBe('H2');
});

test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
  const { container } = render(
    <MemoryRouter>
      <About />
    </MemoryRouter>,
  );
  const paragraphsNumbers = 2;
  const paragraphs = container.querySelectorAll('p');
  expect(paragraphs.length).toBe(paragraphsNumbers);
});

test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
  const { getByAltText } = render(
    <MemoryRouter>
      <About />
    </MemoryRouter>,
  );
  const image = getByAltText('Pokédex');
  expect(image.src).toBe('https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
