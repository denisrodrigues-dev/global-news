import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" Component={ Layout } />
    </Routes>
  );
}
