import NewsProvider from './context/NewsProvider';
import RoutesApp from './routes/RoutesApp';

export default function App() {
  return (
    <NewsProvider>
      <RoutesApp />
    </NewsProvider>
  );
}
