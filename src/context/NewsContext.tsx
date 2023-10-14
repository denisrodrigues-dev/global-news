import { createContext } from 'react';
import { NewsType } from '../types';

type NewsContextType = {
  featuredNewsData: NewsType | null;
  newsFilterData: NewsType[];
  filterNews: (typeNews: string) => void;
};

const NewsContext = createContext({} as NewsContextType);

export default NewsContext;
