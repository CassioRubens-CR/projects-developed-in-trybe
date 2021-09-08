import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import renderWithRouter from '../components/renderWithRouter';
import App from '../App';
import pokemons from '../data';
import { Pokemon } from '../components';

describe('Teste se é renderizado um card'
+ 'com as informações de determinado pokémon', () => {
  test('O nome correto do Pokémon deve ser mostrado na tela', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Pokemon
          pokemon={ pokemons[0] }
          isFavorite={ false }
        />
      </MemoryRouter>,
    );
    const namePokeon = getByTestId('pokemon-name');
    expect(namePokeon).toHaveTextContent('Pikachu');
  });

  test('O peso médio do pokémon deve ser exibido com um texto no formato'
  + 'Average weight: <value> <measurementUnit>;'
  + 'onde <value> e <measurementUnit> são, respectivamente,'
  + 'o peso médio do pokémon e sua unidade de medida', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Pokemon
          pokemon={ pokemons[0] }
          isFavorite={ false }
        />
      </MemoryRouter>,
    );
    const averageWeight = getByTestId('pokemon-weight');
    expect(averageWeight).toHaveTextContent('Average weight: 6.0 kg');
  });

  test('A imagem do Pokémon deve ser exibida. Ela deve conter um atributo src'
  + 'com a URL da imagem e um atributo alt com o texto <name> sprite,'
  + 'onde <name> é o nome do pokémon', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Pokemon
          pokemon={ pokemons[0] }
          isFavorite={ false }
        />
      </MemoryRouter>,
    );
    const imgPokemon = getByRole('img', {
      src: 'https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
      name: 'Pikachu sprite',
    });
    expect(imgPokemon).toHaveAttribute('src', 'https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
});

test('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação'
+ 'para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemons/<id>,'
+ 'onde <id> é o id do Pokémon exibido', () => {
  const { getByRole } = render(
    <MemoryRouter>
      <Pokemon
        pokemon={ pokemons[0] }
        isFavorite={ false }
      />
    </MemoryRouter>,
  );
  const linkShowDetails = getByRole('link', { href: '/pokemons/25' });
  expect(linkShowDetails).toBeInTheDocument();
});

test('Teste se ao clicar no link de navegação do Pokémon,'
+ 'é feito o redirecionamento da aplicação para a página de detalhes de Pokémon.', () => {
  const { getByRole } = renderWithRouter(
    <MemoryRouter>
      <Pokemon
        pokemon={ pokemons[0] }
        isFavorite={ false }
      />
    </MemoryRouter>,
  );
  const linkDetailsPokemon = getByRole('link', { href: '/pokemons/25' });
  expect(linkDetailsPokemon).toBeInTheDocument();
});

test('Teste também se a URL exibida no navegador muda para /pokemon/<id>,'
+ 'onde <id> é o id do Pokémon cujos detalhes se deseja ver;', () => {
  const { getByText, history } = renderWithRouter(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const linkElement = getByText('More details');
  fireEvent.click(linkElement);
  const { pathname } = history.location;
  expect(pathname).toBe('/');
  const searchWord = getByText(/Summary/i);
  expect(searchWord).toBeInTheDocument();
});

describe('Teste se existe um ícone de estrela nos Pokémons favoritados', () => {
  test('O ícone deve ser uma imagem com o atributo src'
  + 'contendo o caminho /star-icon.svg'
  + 'A imagem deve ter o atributo alt igual a <pokemon> is marked as favorite,'
  + 'onde <pokemon> é o nome do Pokémon exibido', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Pokemon
          pokemon={ pokemons[0] }
          isFavorite
        />
      </MemoryRouter>,
    );
    const imgPokemon = getByRole('img', {
      src: '/star-icon.svg',
      name: 'Pikachu is marked as favorite',
    });
    expect(imgPokemon).toBeDefined();
  });
});
