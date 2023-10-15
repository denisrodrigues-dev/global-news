import { screen } from '@testing-library/dom';
import { renderWithRouter } from './utils/renderWithRouter';
import Home from '../pages/Home';
import NewsProvider from '../context/NewsProvider';

describe('Testa o componente Home', () => {
  it('Testa se componente é renderizado corretamente', () => {
    renderWithRouter(
      <NewsProvider>
        <Home />
      </NewsProvider>,
      { route: '/' },
    );
  });
});
