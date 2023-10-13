export const fetchNewsAndReleases = async () => {
  const URL_API = 'http://servicodados.ibge.gov.br/api/v3/noticias';

  const response = await fetch(URL_API);
  const data = await response.json();
  return data.items;
};
