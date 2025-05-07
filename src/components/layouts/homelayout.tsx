import Header from '../header/header';
import { Outlet } from 'react-router-dom';

export default function HomeLayout() {
  return (
    <>
      <Header />
      <main style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 80px)', 
        padding: '2rem'
      }}>
        <Outlet />
      </main>
    </>
  );
}
