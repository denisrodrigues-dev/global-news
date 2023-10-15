import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Search from '../pages/Search';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" Component={ Layout }>
        <Route index Component={ Home } />
        <Route path="search" Component={ Search } />
      </Route>
    </Routes>
  );
}
