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
  const [favoriteNews, setFavoriteNews] = useState<NewsType[]>([]);

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
    if (typeNews === 'Mais recentes') setNewsFilterData(newsData);
    else if (typeNews === 'Favoritas') setNewsFilterData(favoriteNews);
    else {
      const filteredNews = newsData.filter(({ tipo }) => tipo === typeNews);
      setNewsFilterData(filteredNews);
    }
  };

  const value = {
    newsFilterData,
    featuredNewsData,
    filterNews,
  };

  return (
    <NewsContext.Provider value={ value }>
      {children}
    </NewsContext.Provider>
  );
}
