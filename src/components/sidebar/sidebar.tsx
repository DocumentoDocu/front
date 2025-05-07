import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside style={{ width: '200px', padding: '1rem', backgroundColor: '#F5E8FF' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/">Introduction</Link></li>
          <li><Link to="/installation">Installation</Link></li>
          <li><Link to="/deploiement">Déploiement</Link></li>
        </ul>
      </nav>
    </aside>
  );
}