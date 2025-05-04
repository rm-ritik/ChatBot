import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

import appList from '../data/apps.json'
import CardItem from '../components/cardItem/cardItem';
import './index.css'

export default function Apps(props) {
  const [apps, setApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);

  useEffect(() => {
    setApps(appList);
  });

  useEffect(() => {
    const filtered = apps.filter(app =>
      app.name.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      app.category.toLowerCase().includes(props.searchQuery.toLowerCase())
    );
    setFilteredApps(filtered);
  }, [props.searchQuery, apps]);

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
  searchQuery: PropTypes.string
};
