import {
  ImageList, ImageListItem,
  ImageListItemBar, Card, CardMedia,
} from '@mui/material';
import React, { useEffect } from 'react';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchImages from '../api/data_fetch';
import '../components/image/image_card.css';
import NavgationBar from '../components/NavgationBar';
import Loading from '../components/Loading';

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
        <Loading />
      </div>
    );
  }
  return (
    <div className="home">
      <NavgationBar />
      <div style={{ marginTop: '63px', borderRadius: '0' }}>
        <div className="image-tags">
          <h4>
            {
              imagesData.images[0].tags.toUpperCase()
            }
          </h4>
          <h5>
            {
              `${imagesData.images[0].likes.toLocaleString()} likes`
            }
          </h5>
        </div>
        <Card component={Link} to={`./details?id=${imagesData.images[0].id}`}>
          <CardMedia
            component="img"
            height="194"
            image={imagesData.images[0].webformatURL}
            alt={imagesData.images[0].tags}
          />
        </Card>
      </div>
      <ImageList variant="masonry" cols={2} gap={8} sx={{ marginTop: '5px' }}>
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
                    {image.likes.toLocaleString()}
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
