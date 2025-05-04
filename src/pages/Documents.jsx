import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

import documentList from '../data/documents.json';
import CardItem from '../components/cardItem/cardItem';
import './index.css'

export default function Documents(props) {
  const [documents, setDocuments] = useState([]);
  const [filteredDocuments, setFilteredDocuments] = useState([]);

  useEffect(() => {
    setDocuments(documentList);
  });

  useEffect(() => {
    const filtered = documents.filter(document =>
      document.name.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      document.description.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      document.category.toLowerCase().includes(props.searchQuery.toLowerCase())
    );
    setFilteredDocuments(filtered);
  }, [props.searchQuery, documents]);

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
    searchQuery: PropTypes.string
}