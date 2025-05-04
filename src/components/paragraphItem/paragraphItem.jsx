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

import './paragraphItem.css';

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
      <span key={index} style={{ backgroundColor: 'yellow'}}>{part}</span>
    ) : (
      part
    )
  );
}

export default function ParagraphItem(props) {
  return (
    <div className="paragraph-item-container">
      {highlightText(props.content, props.searchQuery)}
    </div>
  );
}

Card.PropTypes = {
    content: PropTypes.string,
    searchQuery: PropTypes.string
}
