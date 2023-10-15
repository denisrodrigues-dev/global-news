import { createContext } from 'react';
import { NewsType } from '../types';

type NewsContextType = {
  featuredNewsData: NewsType | null;
  newsFilterData: NewsType[];
  quantityNews: number;
  currentFilter: string;
  searchNewsData: NewsType[];
  searchInfo: string;
  isLoading: boolean;
  filterNews: (typeNews: string) => void;
  favoriteNews: (isFavorite: boolean, id: number) => void;
  addQuantityNews: () => void;
  searchNewsByValue: (searchValue: string) => void;
};

const NewsContext = createContext({} as NewsContextType);

export default NewsContext;
