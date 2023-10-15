import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { waitFor } from '@testing-library/react';
import { renderWithRouter } from './utils/renderWithRouter';
import App from '../App';
import * as APIModule from '../services/fetchApi';
import mockNewsAndReleases from './mocks/mockNewsAndReleases';

const textScreen = 'Notícia mais recente';

describe('Testa a página home', () => {
  beforeEach(() => {
    vi.spyOn(APIModule, 'fetchNewsAndReleases').mockResolvedValue(mockNewsAndReleases.items);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Testa se a página home é renderizada corretamente', async () => {
    renderWithRouter(
      <App />,
      { route: '/' },
    );

    await waitFor(() => {
      screen.getByText(textScreen);
    }, { timeout: 5000 });

    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Mais recentes' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Release' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Notícia' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Favoritas' })).toBeInTheDocument();

    expect(screen.getAllByTestId('featured-card')).toHaveLength(1);
    expect(screen.getAllByTestId('news-card')).toHaveLength(9);

    expect(APIModule.fetchNewsAndReleases).toHaveBeenCalledTimes(1);
  });

  it('Testa se ao clicar no filtro de notícias apenas as notícias são exibidas', async () => {
    const { user } = renderWithRouter(
      <App />,
      { route: '/' },
    );

    await waitFor(() => {
      screen.getByText(textScreen);
    }, { timeout: 5000 });

    const newsFilterButton = screen.getByRole('button', { name: 'Notícia' });
    await user.click(newsFilterButton);

    const buttonMoreNews = screen.getByRole('button', { name: 'MAIS NOTÍCIAS' });
    await user.click(buttonMoreNews);

    const filteredNews = mockNewsAndReleases.items.filter((news) => news.tipo === 'Notícia');

    expect(screen.getByText(filteredNews[0].titulo)).toBeInTheDocument();
    expect(screen.getByText(filteredNews[1].titulo)).toBeInTheDocument();
    expect(screen.getByText(filteredNews[2].titulo)).toBeInTheDocument();
    expect(screen.getByText(filteredNews[3].titulo)).toBeInTheDocument();

    const recentFilterButton = screen.getByRole('button', { name: 'Mais recentes' });
    await user.click(recentFilterButton);
  });

  it('Testa se é possível adicionar e remover notícias dos favoritos', async () => {
    const { user } = renderWithRouter(
      <App />,
      { route: '/' },
    );

    await waitFor(() => {
      screen.getByText(textScreen);
    }, { timeout: 5000 });

    const favoritesHeart = screen.getAllByAltText('favorite');
    expect(screen.getAllByAltText('favorite')).toHaveLength(10);

    await user.click(favoritesHeart[0]);
    await user.click(favoritesHeart[1]);

    const favoriteFilterButton = screen.getByRole('button', { name: 'Favoritas' });
    await user.click(favoriteFilterButton);
    expect(screen.getAllByTestId('news-card')).toHaveLength(2);

    await user.click(favoritesHeart[0]);
    expect(screen.getAllByTestId('news-card')).toHaveLength(1);
  });

  it('Testa se as notícias adicionadas ao localStorage persistem ao renderizar a página', async () => {
    localStorage.setItem('favoriteNews', JSON.stringify([mockNewsAndReleases.items[0], mockNewsAndReleases.items[1]]));
    const { user } = renderWithRouter(
      <App />,
      { route: '/' },
    );

    await waitFor(() => {
      screen.getByText(textScreen);
    }, { timeout: 5000 });

    const favoriteFilterButton = screen.getByRole('button', { name: 'Favoritas' });
    await user.click(favoriteFilterButton);

    expect(screen.getAllByTestId('news-card')).toHaveLength(2);
  });

  it('Testa se o link "Leia a notícia aqui" é exibido na página', async () => {
    const { user } = renderWithRouter(
      <App />,
      { route: '/' },
    );

    await waitFor(() => {
      screen.getByText(textScreen);
    }, { timeout: 5000 });

    const linkDetails = screen.getAllByRole('link', { name: 'Leia a notícia aqui' });
    await user.click(linkDetails[0]);
  });

  it('Testa se ao clicar no botão "MAIS NOTÍCIAS" a quantidade de notícias exibidas é duplicada', async () => {
    const { user } = renderWithRouter(
      <App />,
      { route: '/' },
    );

    await waitFor(() => {
      screen.getByText(textScreen);
    }, { timeout: 5000 });

    expect(screen.getAllByTestId('news-card')).toHaveLength(9);

    const buttonMoreNews = screen.getByRole('button', { name: 'MAIS NOTÍCIAS' });
    await user.click(buttonMoreNews);

    expect(screen.getAllByTestId('news-card')).toHaveLength(18);
  });
});
