import type { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-lg font-bold">
          Gym Website
        </a>
        <ul className="flex items-center space-x-4">
          {children}
        </ul>
      </nav>
    </header>
  );
};

export default Header;