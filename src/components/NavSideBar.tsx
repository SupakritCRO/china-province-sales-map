import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHome, HiOutlineChartBar, HiOutlineSearchCircle, HiOutlineInformationCircle } from 'react-icons/hi';
import { IconType } from 'react-icons';
import Logo from '../assets/logo.png';

// Define navigation items with React Icons
interface NavItem {
  to: string;
  label: string;
  icon: IconType;
}

const navItems: NavItem[] = [
  {
    to: '/',
    label: 'Home',
    icon: HiOutlineHome,
  },
  {
    to: '/loss-making-products-scanner',
    label: 'Loss Making Scanner',
    icon: HiOutlineChartBar,
  },
  {
    to: '/competitors-scanner',
    label: 'Competitors Scanner',
    icon: HiOutlineSearchCircle,
  },
  {
    to: '/business-tools',
    label: 'Business Tools',
    icon: HiOutlineInformationCircle,
  },
];

const NavSideBar: React.FC = () => {
  return (
    <aside
      className="w-72 bg-cpg-green-dark shadow-lg flex flex-col overflow-hidden rounded-3xl"
      style={{ fontFamily: 'Satoshi, sans-serif' }}
    >
      {/* Header/Branding Area */}
      <div className="p-6 border-b border-cpg-green-dark/30 flex items-center space-x-3">
        <img
          src={Logo}
          alt="CP Group Logo"
          className="w-12 h-12 object-contain rounded-full border-2 border-cpg-white/20 shadow-sm bg-white"
        />
        <div>
          <h2
            className="text-lg font-bold text-cpg-white tracking-tight"
            style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
          >
            Retail Health Scanner
          </h2>
          <p className="text-xs text-cpg-gray-light opacity-80">Business Insights</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-2 px-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `group flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-cpg-white/10 text-cpg-white shadow-md'
                      : 'text-cpg-gray-light hover:bg-cpg-green/50 hover:text-cpg-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon
                      className={`w-5 h-5 mr-3 transition-colors duration-200 ${
                        isActive ? 'text-cpg-white' : 'text-cpg-gray-light group-hover:text-cpg-white'
                      }`}
                    />
                    <span className="text-sm font-medium">{item.label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-cpg-green-dark/30">
        <p className="text-xs text-cpg-gray-light opacity-70">
          © 2025 CP Group. All rights reserved.
        </p>
      </div>
    </aside>
  );
};

export default NavSideBar;