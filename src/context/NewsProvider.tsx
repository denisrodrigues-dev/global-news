import React, { useEffect, useState } from 'react';
import NewsContext from './NewsContext';
import { fetchNewsAndReleases } from '../services/fetchApi';
import { NewsType } from '../types';

type NewsProviderProps = {
  children: React.ReactNode;
};

export default function NewsProvider({ children }: NewsProviderProps) {
  const [newsData, setNewsData] = useState<NewsType[]>([]);
  const [featuredNewsData, setFeaturedNewsData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const resultData = await fetchNewsAndReleases();
      const [featuredNews, ...news] = resultData;
      setNewsData(news);
      setFeaturedNewsData(featuredNews);
      console.log(JSON.parse(featuredNews.imagens));
    };
    getData();
  }, []);

  const value = {
    newsData,
    featuredNewsData,
  };

  return (
    <NewsContext.Provider value={ value }>
      {children}
    </NewsContext.Provider>
  );
}
