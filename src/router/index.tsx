import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../components/layouts/defaultlayout';
import HomeLayout from '../components/layouts/homelayout';
import Introduction from '../pages/views/intro/introduction'; 
import Installation from '../pages/views/install/installation';
import Deploiement from '../pages/views/deploy/deploiement';
import Home from '../pages/views/home/home';



export default function AppRouter() {
  return (
    <Routes>

      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<DefaultLayout />}>
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/deploiement" element={<Deploiement />} />
      </Route>
    </Routes>
  );
}
