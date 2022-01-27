import React from 'react';
import { IProps } from './dashboard.interface';
import TopBarContainer from './TopBar/TopBarContainer';

const Dashboard: React.FC<IProps> = ({
  gamers,
}) => {
  return (
    <div className="min-h-full">
      <div className="bg-gray-800 pb-32">
        <TopBarContainer />
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          </div>
        </header>
      </div>

      <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            {/* Main content */}
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            {/* Content end */}
          </div>
        </main>
    </div>
  );
};

export default Dashboard;
