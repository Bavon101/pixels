import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { fetchDataSuccess, imageFetchSuccess } from '../api/data_fetch_statuses';
import store from '../app/store';
import DetailsCard from '../components/DetailsCard';
import DetailsPage from '../pages/DetailsPage';
import HomePage from '../pages/HomePage';
import { imageReducer, imagesReducer } from '../redux/images';
import mockImages from './mock_data/images';
import mockImage from './mock_data/image';

it('Render HomePage', () => {
  const page = renderer.create(
    <Provider store={store}>
      <HomePage />
    </Provider>,
  ).toJSON();
  expect(page).toMatchSnapshot();
});

it('Render Details Page', () => {
  const page = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/details?id=63636733" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(page).toMatchInlineSnapshot('null');
});

it('Render Details card', () => {
  const card = renderer.create(
    <DetailsCard title="Views" value="20" light icon="file_download" />,
  );
  expect(card).toMatchSnapshot();
});

it('Update fetched images', () => {
  const state = imagesReducer(undefined, fetchDataSuccess(mockImages));
  expect(state.images.length).toEqual(20);
});

it('Update store with single image', () => {
  expect(imageReducer(undefined, imageFetchSuccess(mockImage)).image).toEqual(mockImage.hits[0]);
});
