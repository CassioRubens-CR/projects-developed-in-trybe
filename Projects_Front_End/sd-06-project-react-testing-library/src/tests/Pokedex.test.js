import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import pokemons from '../data';

describe('Teste se é exibido o próximo Pokémon da lista'
+ 'quando o botão Próximo pokémon é clicado', () => {
  test('O botão deve conter o texto Próximo pokémon', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const nextPokemon = getByTestId('next-pokemon');
    expect(nextPokemon).toHaveTextContent('Próximo pokémon');
  });

  test('Os próximos Pokémons da lista devem ser mostrados, um a um,'
  + 'ao clicar sucessivamente no botão.', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    pokemons.forEach((pokemon) => {
      expect(getByText(pokemon.name)).toBeInTheDocument();
      fireEvent.click(getByTestId('next-pokemon'));
    });
  });

  test('O primeiro Pokémon da lista deve ser mostrado ao clicar no botão'
  + 'se estiver no último Pokémon da lista', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    pokemons.forEach(() => {
      fireEvent.click(getByTestId('next-pokemon'));
    });
    expect(getByText(pokemons[0].name)).toBeInTheDocument();
  });
});

test('Teste se é mostrado apenas um Pokémon por vez', () => {
  const { getAllByTestId, getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const onePokemon = getAllByTestId('pokemon-name');
  const EncounteredPokemons = getByText('Encountered pokémons');
  expect(onePokemon.length).toBe(1);
  expect(EncounteredPokemons).toBeInTheDocument();
});

describe('Teste se a Pokédex tem os botões de filtro', () => {
  test('Os Pokémons do tipo selecionado através do'
  + 'botão de tipo devem estar circulados', () => {
    const { getAllByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const buttonFilter = getAllByTestId('pokemon-type-button');
    const amountButtons = 7;
    expect(buttonFilter.length).toBe(amountButtons);
  });

  test('O texto do botão deve corresponder ao nome do tipo, ex. Psychic', () => {
    const { getByTestId, getAllByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const typePokemon = getByTestId('pokemonType');
    const buttonFilter = getAllByTestId('pokemon-type-button');
    buttonFilter.forEach((type) => {
      fireEvent.click(type);
      expect(typePokemon.textContent).toBe(type.textContent);
    });
  });
});

describe('Teste se a Pokédex contém um botão para resetar o filtro', () => {
  test('O texto do botão deve ser All', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    fireEvent.click(getByText(/All/i));
    expect(getByText(/Pikachu/i)).toBeInTheDocument();
  });

  test('A Pokedéx deverá voltar a circular por todos os Pokémons'
   + 'quando o botão for clicado', () => {
    const { getByText, getAllByRole, getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const allButton = getAllByRole('button')[0];
    fireEvent.click(allButton);
    pokemons.forEach((pokemon) => {
      expect(getByText(pokemon.name)).toBeInTheDocument();
      fireEvent.click(getByTestId('next-pokemon'));
    });
  });

  test('Ao carregar a página, o filtro selecionado deverá ser All', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const selectedFilter = getByTestId('pokemon-name');
    expect(selectedFilter.innerHTML).toBe('Pikachu');
    fireEvent.click(getByText('Próximo pokémon'));
    expect(selectedFilter.innerHTML).toBe('Charmander');
  });
});

describe('Teste se é criado, dinamicamente,'
+ 'um botão de filtro para cada tipo de Pokémon.', () => {
  test('Os botões de filtragem devem ser dinâmicos'
  + 'Deve existir um botão de filtragem para cada tipo de Pokémon disponível nos dados,'
  + 'independente de quais ou quantos sejam, sem repetição de tipos.'
  + 'Ou seja, a sua Pokédex deve possuir pokémons do tipo Fire,'
  + 'Psychic, Electric e Normal', () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const allButton = getAllByRole('button');
    allButton.forEach((children) => {
      expect(children.textContent).toBe(children.textContent);
    });
  });

  test('Deve ser mostrado como opção de filtro, um botão para cada um dos tipos.'
  + 'Além disso, o botão All precisa estar sempre visível', () => {
    const { getByTestId, getByText, getAllByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const pokemonName = getByTestId('pokemon-name');
    const allButton = getAllByRole('button')[0];
    expect(pokemonName.innerHTML).toBe('Pikachu');
    fireEvent.click(getByText('Próximo pokémon'));
    expect(pokemonName.innerHTML).toBe('Charmander');
    expect(allButton).toHaveTextContent('All');
  });
});

test('O botão de Próximo pokémon deve ser desabilitado quando'
+ 'a lista filtrada de Pokémons tiver um só pokémon', () => {
  const { getAllByRole, getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const allButton = getAllByRole('button');
  const electricButton = allButton[1];
  fireEvent.click(electricButton);
  const nextPokemon = getByText('Próximo pokémon');
  expect(nextPokemon).toBeDisabled();
});
