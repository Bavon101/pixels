import {
  ImageList, ImageListItem,
  ImageListItemBar, Card, CardMedia, ButtonGroup, Button,
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
import { imagesFiltered, resetFilters } from '../api/data_fetch_statuses';

export default function HomePage() {
  const imagesData = useSelector((state) => state.imagesReducer);
  const dispatch = useDispatch();
  const images = imagesData.filter;
  useEffect(() => {
    if (imagesData.images.length === 0) {
      dispatch(fetchImages());
    }
  }, []);
  const filter = (filter) => dispatch(imagesFiltered(filter));
  if (images.length === 0) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  const btnStyle = {
    backgroundColor: '#3F62A6',
  };
  return (
    <div className="home">
      <NavgationBar title="PIXELS" goBack={false} />
      <div style={{ marginTop: '63px', borderRadius: '0' }}>
        <div className="filiter-card">
          <i className="material-icons">filter</i>
          <h5>
            Filter Images with:
          </h5>
        </div>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ marginBottom: '10px' }}>
          <Button onClick={() => filter('likes')} sx={imagesData.filter_tag !== 'likes' ? btnStyle : {}}>
            Likes
          </Button>
          <Button onClick={() => filter('views')} sx={btnStyle}>views</Button>
          <Button onClick={() => filter('comments')} sx={btnStyle}>Comments</Button>
          <Button onClick={() => dispatch(resetFilters())} sx={btnStyle}>Clear</Button>
        </ButtonGroup>
        <div className="image-tags">
          <h4>
            {
              images[0].tags.toUpperCase()
            }
          </h4>
          <h5>
            {
              `${images[0].likes.toLocaleString()} ${imagesData.filter_tag}`
            }
          </h5>
        </div>
        <Card component={Link} to={`./details?id=${images[0].id}`}>
          <CardMedia
            component="img"
            height="194"
            image={images[0].webformatURL}
            alt={images[0].tags}
          />
        </Card>
      </div>
      <h4 className="filter-label">
        {`PIXELS FILTERED BY ${imagesData.filter_tag.toUpperCase()}`}
      </h4>
      <ImageList cols={2} gap={8} sx={{ marginTop: '5px' }}>
        {images.map((image) => (
          <ImageListItem component={Link} to={`./details?id=${image.id}`} key={image.id}>
            <ArrowCircleDownRoundedIcon sx={{ color: 'white' }} className="arrow-btn" style={{ transform: 'rotate(-90deg)' }} />
            <div className="image-tags-con">
              <h5>
                {
                  image.tags.toUpperCase().split(',')[0]
                }
              </h5>
            </div>
            <img
              src={`${image.webformatURL}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image.webformatURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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
                    {image[imagesData.filter_tag].toLocaleString()}
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
