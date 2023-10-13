import { createContext } from 'react';
import { NewsType } from '../types';

type NewsContextType = {
  featuredNewsData: NewsType | null;
  newsData: NewsType[];
};

const NewsContext = createContext({} as NewsContextType);

export default NewsContext;
