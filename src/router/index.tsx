import { Route, Routes } from 'react-router-dom';
import Introduction from '../pages/views/intro/introduction'; 
import Installation from '../pages/views/install/installation';
import Deploiement from '../pages/views/deploy/deploiement';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="/installation" element={<Installation />} />
      <Route path="/deploiement" element={<Deploiement />} />
    </Routes>
  );
}