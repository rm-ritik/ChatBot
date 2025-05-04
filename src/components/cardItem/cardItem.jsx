import * as React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import ChecklistIcon from '@mui/icons-material/Checklist';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DescriptionIcon from '@mui/icons-material/Description';
import NoteIcon from '@mui/icons-material/Note';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import './cardItem.css';

const iconMap = {
    Checklist: <ChecklistIcon />,
    WbSunny: <WbSunnyIcon />,
    StickyNote2: <StickyNote2Icon />,
    CurrencyExchange: <CurrencyExchangeIcon />,
    Description: <DescriptionIcon />,
    Note: <NoteIcon />,
    MenuBook: <MenuBookIcon />,
    ReceiptLong: <ReceiptLongIcon />
};

function highlightText(text, query) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
    ) : (
      part
    )
  );
}

export default function CardItem(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <div className="card-icon">
            {iconMap[props.icon]}
      </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {highlightText(props.name, props.searchQuery)}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {highlightText(props.description, props.searchQuery)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {highlightText(props.category, props.searchQuery)}
        </Button>
      </CardActions>
    </Card>
  );
}

Card.PropTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    icon: PropTypes.string,
    searchQuery: PropTypes.string
}
