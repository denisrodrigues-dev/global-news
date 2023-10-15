import { vi } from 'vitest';
import { fetchNewsAndReleases, fetchNewsAndReleasesBySearch } from '../services/fetchApi';
import mockNewsAndReleases from './mocks/mockNewsAndReleases';
import mockNewsAndReleasesBySearch from './mocks/mockNewsAndReleasesBySearch';

describe('Testa as funções', () => {
  it('Testa a função fetchNewsAndReleases', () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockNewsAndReleases.items,
    } as Response;

    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    fetchNewsAndReleases();

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('http://servicodados.ibge.gov.br/api/v3/noticias');
  });

  it('Testa a função fetchNewsAndReleasesBySearch', () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockNewsAndReleasesBySearch.items,
    } as Response;

    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    fetchNewsAndReleasesBySearch('Campus');

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('http://servicodados.ibge.gov.br/api/v3/noticias/?busca=Campus');
  });
});
