import React, { useEffect, useState } from 'react';
import NewsContext from './NewsContext';
import { fetchNewsAndReleases } from '../services/fetchApi';
import { NewsType } from '../types';

type NewsProviderProps = {
  children: React.ReactNode;
};

export default function NewsProvider({ children }: NewsProviderProps) {
  const [newsData, setNewsData] = useState<NewsType[]>([]);
  const [newsFilterData, setNewsFilterData] = useState<NewsType[]>([]);
  const [featuredNewsData, setFeaturedNewsData] = useState(null);
  const [favoriteNewsData, setFavoriteNewsData] = useState<NewsType[]>(
    JSON.parse(localStorage.getItem('favoriteNews') as string) || [],
  );
  const [currentFilter, setCurrentFilter] = useState('Mais recentes');

  useEffect(() => {
    const getData = async () => {
      const resultData = await fetchNewsAndReleases();
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
  };

  const favoriteNews = (isFavorite: boolean, id: number) => {
    if (!isFavorite) {
      const filteredNews = favoriteNewsData.filter((news) => news.id !== id);
      localStorage.setItem('favoriteNews', JSON.stringify(filteredNews));
      setFavoriteNewsData(filteredNews);
      if (currentFilter === 'Favoritas') setNewsFilterData(filteredNews);
    } else {
      const findNews = newsData.find((news) => news.id === id);
      if (findNews) {
        const newFavoriteNews = [...favoriteNewsData, findNews];
        localStorage.setItem('favoriteNews', JSON.stringify(newFavoriteNews));
        setFavoriteNewsData(newFavoriteNews);
        if (currentFilter === 'Favoritas') setNewsFilterData(newFavoriteNews);
      }
    }
  };

  const value = {
    newsFilterData,
    featuredNewsData,
    filterNews,
    favoriteNews,
  };

  return (
    <NewsContext.Provider value={ value }>
      {children}
    </NewsContext.Provider>
  );
}
