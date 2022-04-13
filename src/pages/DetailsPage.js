import { Card, CardMedia } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchSingleImage } from '../api/data_fetch';
import DetailsCard from '../components/DetailsCard';
import Loading from '../components/Loading';
import NavgationBar from '../components/NavgationBar';
import './styles.css';

export default function DetailsPage() {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get('id');
  const image = useSelector((state) => state.imageReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleImage(id));
  }, []);
  if (image.image == null) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <NavgationBar title="Pixel Data " goBack />
      <div style={{ marginTop: '63px', borderRadius: '0' }}>
        <div className="image-tags">
          <h4>
            {
              image.image.tags.toUpperCase()
          }
          </h4>
          <h5>
            {
              `${image.image.likes.toLocaleString()} likes`
            }
          </h5>
        </div>
        <Card>
          <CardMedia
            component="img"
            height="194"
            image={image.image.webformatURL}
            alt={image.image.tags}
          />
        </Card>
      </div>
      <DetailsCard title="Views" value={`${image.image.views.toLocaleString()} `} icon="visibility" />
      <DetailsCard title="Downloads" value={`${image.image.downloads.toLocaleString()} `} light icon="file_download" />
      <DetailsCard title="Collections" value={`${image.image.collections.toLocaleString()} `} icon="collections" />
      <DetailsCard title="Comments" value={`${image.image.comments.toLocaleString()} `} light icon="chat_bubble" />
      <DetailsCard title="Likes" value={`${image.image.likes.toLocaleString()} `} icon="mood" />
    </div>
  );
}
