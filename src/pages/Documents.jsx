import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

import documentList from '../data/documents.json';
import ParagraphItem from '../components/paragraphItem/paragraphItem';
import './index.css'


export default function Documents(props) {
  const [documents, setDocuments] = useState([]);
  const [filteredDocuments, setFilteredDocuments] = useState([]);

  useEffect(() => {
    setDocuments(documentList);
  });

  useEffect(() => {
    const filtered = documents.filter(document =>
      document.content.toLowerCase().includes(props.searchQuery.toLowerCase())
    );
    setFilteredDocuments(filtered);
  }, [props.searchQuery, documents]);

  return (
    <div>
      {filteredDocuments.length > 0 ? (
        filteredDocuments.map((doc) => (
            <ParagraphItem 
                key={doc.id}
                content={doc.content}
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