import React, { useState } from 'react';
import MediaListContainer from './components/MediaList/MediaListContainer';
import SearchContainer from './components/Search/SearchContainer';
import SwitchContainer from './components/Switch/SwitchContainer';
import TopBarContainer from './TopBar/TopBarContainer';

const publishingOptions = [
  { title: 'All Media', description: 'Both images and videos will be displayed', current: true },
  { title: 'Image', description: 'Only show images', current: false },
  { title: 'Video', description: 'Only show videos', current: false },
]

const Dashboard = () => {
  const [selected, setSelected] = useState(publishingOptions[0])
  const [search, setSearch] = useState('')
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
            <div className='flex justify-between'>
              <div>
                <SwitchContainer selected={selected} setSelected={setSelected} publishingOptions={publishingOptions} />
              </div>
              <div>
                <SearchContainer onSearch={setSearch} />
              </div>
            </div>
            <div>
              <MediaListContainer type={selected.title === "All Media" ? '' : selected.title} search={search} />
            </div>
          </div>
          {/* Content end */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
