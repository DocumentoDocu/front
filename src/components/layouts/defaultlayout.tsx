import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';

export default function DefaultLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <main style={{ padding: '2rem' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}