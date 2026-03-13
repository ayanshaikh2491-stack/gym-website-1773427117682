import type { ReactNode } from 'react';

interface FooterProps {
  children: ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Gym Website</div>
        <ul className="flex items-center space-x-4">
          {children}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;