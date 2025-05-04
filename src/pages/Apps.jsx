import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

import ChecklistIcon from '@mui/icons-material/Checklist';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CardItem from '../components/cardItem/cardItem';

import './index.css'

const iconMap = {
    Checklist: <ChecklistIcon style={{ color: '#1976d2' }} />,
    WbSunny: <WbSunnyIcon style={{ color: '#1976d2' }} />,
    StickyNote2: <StickyNote2Icon style={{ color: '#1976d2' }} />,
    CurrencyExchange: <CurrencyExchangeIcon style={{ color: '#1976d2' }} />
};

export default function Apps(props) {
  const [filteredApps, setFilteredApps] = useState(props.appList);

  useEffect(() => {
    const filtered = props.appList.filter(app =>
      app.name.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(props.searchQuery.toLowerCase())
    );
    setFilteredApps(filtered);
  }, [props.searchQuery, props.appList]);

  return (
    <div className="card-grid">
      {filteredApps.length > 0 ? (
        filteredApps.map((app) => (
            <CardItem 
                key={app.id}
                name={app.name}
                description={app.description} 
                category = {app.category}
                icon = {app.icon}
                searchQuery={props.searchQuery}
            />
        ))
      ) : (
        <p>No results found for "{props.searchQuery}"</p>
      )}
    </div>
  );
}

Apps.propTypes = {
  searchQuery: PropTypes.string,
  appList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      description: PropTypes.string,
      category: PropTypes.string,
      icon: PropTypes.string
    })
  ).isRequired,
};
