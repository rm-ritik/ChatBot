import PropTypes from 'prop-types';
import './Sidebar.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function Sidebar({ visible }) {
  return (
    <div className={`sidebar ${visible ? 'visible' : 'hidden'}`}>
      <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    </div>
  );
}

Sidebar.propTypes = {
  visible: PropTypes.bool.isRequired
};

export default Sidebar;
