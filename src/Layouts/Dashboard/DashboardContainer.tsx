import { useQuery } from 'react-query';
import { getGamers } from '../../services/gamers.service';
import Dashboard from './Dashboard';

const DashboardContainer = () => {
  const { data: gamers } = useQuery('gamers', getGamers);

  return (
    <Dashboard
      gamers={gamers}
    />
  );
};

export default DashboardContainer;
