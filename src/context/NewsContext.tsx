import { createContext } from 'react';
import { NewsType } from '../types';

type NewsContextType = {
  featuredNewsData: NewsType | null;
  newsFilterData: NewsType[];
  quantityNews: number;
  currentFilter: string;
  filterNews: (typeNews: string) => void;
  favoriteNews: (isFavorite: boolean, id: number) => void;
  addQuantityNews: () => void;
};

const NewsContext = createContext({} as NewsContextType);

export default NewsContext;
