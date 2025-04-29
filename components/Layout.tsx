import React from 'react';
// components/Layout.tsx
import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <SubHeader pageTitle="Dashboard" /> */}
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        {children}
      </main>
    </div>
  );
};

export default Layout;