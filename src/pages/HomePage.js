import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchImages from '../api/data_fetch';
import ImageCard from '../components/image/ImageCard';

export default function HomePage() {
  const imagesData = useSelector((state) => state.imagesReduceer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (imagesData.images.length === 0) {
      dispatch(fetchImages());
    }
  }, []);
  return (
    <div>
      <ImageCard />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <ImageCard />
        </Grid>
        <Grid item xs={6}>
          <ImageCard />
        </Grid>
        <Grid item xs={6}>
          <ImageCard />
        </Grid>
        <Grid item xs={6}>
          <ImageCard />
        </Grid>
        <Grid item xs={6}>
          <ImageCard />
        </Grid>
        <Grid item xs={6}>
          <ImageCard />
        </Grid>
      </Grid>
    </div>
  );
}
