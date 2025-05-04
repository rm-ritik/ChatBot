import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

import appList from '../data/apps.json'
import ParagraphItem from '../components/paragraphItem/paragraphItem';
import './index.css'

export default function Apps(props) {
  const [apps, setApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);

  useEffect(() => {
    setApps(appList);
  });

  useEffect(() => {
    const filtered = apps.filter(app =>
      app.content.toLowerCase().includes(props.searchQuery.toLowerCase())
    );
    setFilteredApps(filtered);
  }, [props.searchQuery, apps]);

  return (
    <div>
      {filteredApps.length > 0 ? (
        filteredApps.map((app) => (
            <ParagraphItem 
                key={app.id}
                content={app.content}
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
