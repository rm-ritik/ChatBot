import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

import CardItem from '../components/cardItem/cardItem';
import './index.css'

export default function Documents(props) {
  const [filteredDocuments, setFilteredDocuments] = useState(props.documentList);

  useEffect(() => {
    const filtered = props.documentList.filter(document =>
      document.name.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      document.description.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      document.category.toLowerCase().includes(props.searchQuery.toLowerCase())
    );
    setFilteredDocuments(filtered);
  }, [props.searchQuery, props.documentList]);

  return (
    <div className="card-grid">
      {filteredDocuments.length > 0 ? (
        filteredDocuments.map((doc) => (
            <CardItem 
                key={doc.id}
                name={doc.name}
                description={doc.description} 
                category = {doc.category}
                icon = {doc.icon}
                searchQuery={props.searchQuery}
            />
        ))
      ) : (
        <p>No results found for "{props.searchQuery}"</p>
      )}
    </div>
  );
}

Documents.propTypes = {
    searchQuery: PropTypes.string,
    documentList: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        description: PropTypes.string,
        category: PropTypes.string,
        icon: PropTypes.string
        })
    ).isRequired,
}