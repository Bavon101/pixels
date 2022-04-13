import {
  AppBar, IconButton, Toolbar, Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import PanoramaPhotosphereIcon from '@mui/icons-material/PanoramaPhotosphere';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

export default function NavgationBar(props) {
  const { title, goBack } = props;
  const navigate = useNavigate();
  return (
    <AppBar position="fixed" color="primary" sx={{ backgroundColor: '#4369B2' }}>
      <Toolbar>
        <IconButton onClick={() => {
          if (goBack) {
            navigate(-1);
          }
        }}
        >
          { !goBack ? (<PanoramaPhotosphereIcon sx={{ color: 'white' }} />) : <ArrowBackIosIcon sx={{ color: 'white' }} />}
        </IconButton>
        <Typography sx={{ textAlign: 'center', marginLeft: '24px' }}>
          {title ?? 'PIXELS'}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

NavgationBar.propTypes = {
  title: PropTypes.string.isRequired,
  goBack: PropTypes.bool.isRequired,
};
