import React, { useEffect, useState } from 'react';
import NewsContext from './NewsContext';
import { fetchNewsAndReleases, fetchNewsAndReleasesBySearch } from '../services/fetchApi';
import { NewsType } from '../types';

type NewsProviderProps = {
  children: React.ReactNode;
};

export default function NewsProvider({ children }: NewsProviderProps) {
  const [newsData, setNewsData] = useState<NewsType[]>([]);
  const [newsFilterData, setNewsFilterData] = useState<NewsType[]>([]);
  const [featuredNewsData, setFeaturedNewsData] = useState<NewsType | null>(null);
  const [favoriteNewsData, setFavoriteNewsData] = useState<NewsType[]>(
    JSON.parse(localStorage.getItem('favoriteNews') as string) || [],
  );
  const [currentFilter, setCurrentFilter] = useState<string>('Mais recentes');
  const [quantityNews, setQuantityNews] = useState<number>(9);
  const [searchNewsData, setSearchNewsData] = useState<NewsType[]>([]);
  const [searchInfo, setSearchInfo] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const resultData = await fetchNewsAndReleases();
      setIsLoading(false);
      const [featuredNews, ...news] = resultData;
      setNewsData(news);
      setNewsFilterData(news);
      setFeaturedNewsData(featuredNews);
    };
    getData();
  }, []);

  const filterNews = (typeNews: string) => {
    setCurrentFilter(typeNews);
    if (typeNews === 'Mais recentes') setNewsFilterData(newsData);
    else if (typeNews === 'Favoritas') setNewsFilterData(favoriteNewsData);
    else {
      const filteredNews = newsData.filter(({ tipo }) => tipo === typeNews);
      setNewsFilterData(filteredNews);
    }
    resetQuantityNews();
  };

  const favoriteNews = (isFavorite: boolean, id: number) => {
    if (!isFavorite) {
      const filteredNews = favoriteNewsData.filter((news) => news.id !== id);
      localStorage.setItem('favoriteNews', JSON.stringify(filteredNews));
      setFavoriteNewsData(filteredNews);
      if (currentFilter === 'Favoritas') setNewsFilterData(filteredNews);
    } else {
      const findNews = [...newsData, featuredNewsData].find((news) => news?.id === id);
      if (findNews) {
        const newFavoriteNews = [...favoriteNewsData, findNews];
        localStorage.setItem('favoriteNews', JSON.stringify(newFavoriteNews));
        setFavoriteNewsData(newFavoriteNews);
      }
    }
  };

  const searchNewsByValue = async (searchValue: string) => {
    setIsLoading(true);
    const resultData = await fetchNewsAndReleasesBySearch(searchValue);
    setIsLoading(false);
    setSearchInfo(searchValue);
    setSearchNewsData(resultData);
    resetQuantityNews();
  };

  const addQuantityNews = () => {
    setQuantityNews(quantityNews + 9);
  };

  const resetQuantityNews = () => {
    setQuantityNews(9);
  };

  const value = {
    newsFilterData,
    featuredNewsData,
    filterNews,
    favoriteNews,
    quantityNews,
    addQuantityNews,
    currentFilter,
    searchNewsByValue,
    searchNewsData,
    searchInfo,
    isLoading,
  };

  return (
    <NewsContext.Provider value={ value }>
      {children}
    </NewsContext.Provider>
  );
}
