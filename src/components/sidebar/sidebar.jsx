import PropTypes from 'prop-types';
import './Sidebar.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppsIcon from '@mui/icons-material/Apps';
import DescriptionIcon from '@mui/icons-material/Description';

import {Link} from 'react-router-dom'

const iconMap = {
    Apps: <AppsIcon />,
    Description: <DescriptionIcon />
};

function Sidebar(props) {
  return (
    <div className={`sidebar ${props.visible ? 'visible' : 'hidden'}`}>
      <List>
        {props.options.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to = {item.path}
              selected={props.selected === item.label}
              onClick={() => props.onSelect(item.label)}
            >
              <ListItemIcon>{iconMap[item.icon] || null}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

Sidebar.propTypes = {
    visible: PropTypes.bool.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string,
        path: PropTypes.string
      })
    ).isRequired,
    selected: PropTypes.string,
    onSelect: PropTypes.func.isRequired
};

export default Sidebar;
