import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import NewsProvider from './context/NewsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <NewsProvider>
      <App />
    </NewsProvider>
  </BrowserRouter>,
);
