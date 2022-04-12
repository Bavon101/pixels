import {
  Card, CardMedia,
} from '@mui/material';
import React from 'react';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import './image_card.css';
import { Link } from 'react-router-dom';

export default function ImageCard() {
  return (
    <Link to="./details?id=2727373">
      <ArrowCircleDownRoundedIcon className="arrow-btn" style={{ transform: 'rotate(-90deg)' }} />

      <Card>
        <CardMedia
          component="img"
          height="194"
          image="https://cdn.pixabay.com/photo/2022/02/20/09/46/lama-7024125__340.jpg"
          alt="Paella dish"
        />
      </Card>
    </Link>
  );
}
