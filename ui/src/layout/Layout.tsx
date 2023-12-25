import React from 'react';
import Navbar from './navbar/Navbar';

const Layout = ({
  children,
  searchCampaigns,
}: {
  children: React.ReactNode;
  searchCampaigns?: (searchTerm: string) => void;
}) => {
  return (
    <div className="container">
      <Navbar searchCampaigns={searchCampaigns} />
      {children}
    </div>
  );
};

export default Layout;
