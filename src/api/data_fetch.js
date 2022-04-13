import {
  fetchDataBegin, fetchDataFailure,
  fetchDataSuccess, imageFetchSuccess,
} from './data_fetch_statuses';

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export default function fetchImages() {
  return (dispatch) => {
    dispatch(fetchDataBegin());
    return fetch('https://pixabay.com/api/?key=12918753-88ae9b08d6ddff4b548ea3571&q=art+blue&image_type=photo&pretty=true&per_page=100', {
      method: 'GET',
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((images) => {
        dispatch(fetchDataSuccess(images));
        return images;
      })
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
}

export function fetchSingleImage(id) {
  return (dispatch) => {
    dispatch(fetchDataBegin());
    return fetch(`https://pixabay.com/api/?key=12918753-88ae9b08d6ddff4b548ea3571&id=${id}&image_type=photo&pretty=true`, {
      method: 'GET',
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((image) => {
        dispatch(imageFetchSuccess(image));
        return image;
      })
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
}
