import PropTypes from 'prop-types';

export default function Documents(props) {
    return (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non fringilla purus.</p>
      </div>
    );
}

Documents.propTypes = {
    searchQuery: PropTypes.string,
}