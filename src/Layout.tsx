import { Outlet } from 'react-router-dom';
import NavSideBar from './components/NavSideBar';

export default function Layout() {
  return (
    <div className="flex min-h-screen m-1">
      <NavSideBar />
      <div className="flex-1 ml-2">
        <Outlet />
      </div>
    </div>
  );
}