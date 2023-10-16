export const fetchNewsAndReleases = async () => {
  const URL_API = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';

  const response = await fetch(URL_API);
  const data = await response.json();
  return data.items;
};

export const fetchNewsAndReleasesBySearch = async (searchInfo: string) => {
  const URL_API = `http://servicodados.ibge.gov.br/api/v3/noticias/?busca=${searchInfo}`;

  const response = await fetch(URL_API);
  const data = await response.json();
  return data.items;
};
