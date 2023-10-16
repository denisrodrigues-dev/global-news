import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import App from '../App';
import * as APIModule from '../services/fetchApi';
import mockNewsAndReleasesBySearch from './mocks/mockNewsAndReleasesBySearch';

describe('Testa a página search', () => {
  beforeEach(() => {
    vi.spyOn(APIModule, 'fetchNewsAndReleasesBySearch').mockResolvedValue(mockNewsAndReleasesBySearch.items);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Testa se a página search é renderizada corretamente', () => {
    renderWithRouter(
      <App />,
      { route: '/search' },
    );

    screen.getByTestId('search-input');
  });

  it('Testa se ao digitar "Campus" no input e clicar no botão de pesquisa o resultado é retornado corretamente', async () => {
    const { user } = renderWithRouter(
      <App />,
      { route: '/search' },
    );

    const searchInput = screen.getByTestId('search-input');
    await user.type(searchInput, 'Campus');

    const searchButton = screen.getByRole('button');
    await user.click(searchButton);

    expect(APIModule.fetchNewsAndReleasesBySearch).toHaveBeenCalledTimes(1);
    expect(APIModule.fetchNewsAndReleasesBySearch).toHaveBeenCalledWith('Campus');

    expect(screen.getAllByTestId('news-card')).toHaveLength(6);
  });
});
