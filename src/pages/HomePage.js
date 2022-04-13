import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import React, { useEffect } from 'react';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchImages from '../api/data_fetch';
import '../components/image/image_card.css';
import NavgationBar from '../components/NavgationBar';

export default function HomePage() {
  const imagesData = useSelector((state) => state.imagesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (imagesData.images.length === 0) {
      dispatch(fetchImages());
    }
  }, []);

  if (imagesData.images.length === 0) {
    return (
      <div>
        loading
      </div>
    );
  }
  return (
    <div className="home">
      <NavgationBar />
      <ImageList variant="masonry" cols={2} gap={8} sx={{ marginTop: '65px' }}>
        {imagesData.images.map((image) => (
          <ImageListItem component={Link} to={`./details?id=${image.id}`} key={image.id}>
            <ArrowCircleDownRoundedIcon sx={{ color: 'white' }} className="arrow-btn" style={{ transform: 'rotate(-90deg)' }} />
            <img
              src={`${image.webformatURL}?w=auto&fit=crop&auto=format`}
              srcSet={`${image.webformatURL}?w=auto&fit=crop&auto=format&dpr=2 2x`}
              alt={image.tags}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, '
                  + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title=""
              position="bottom"
              actionIcon={(
                <div className="info-conatiner">
                  <FavoriteIcon sx={{ color: 'white' }} />
                  <h6>
                    {image.likes}
                  </h6>
                </div>
              )}
              actionPosition="right"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
