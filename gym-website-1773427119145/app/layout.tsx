import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto p-4 mt-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;