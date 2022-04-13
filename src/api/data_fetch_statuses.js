export const FETCH_DATA_BEGIN = 'api/images/FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'api/images/FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'api/images/FETCH_DATA_FAILURE';
export const IMAGE_FETCH_BEGIN = 'api/images/IMAGE_FETCH_BEGIN';
export const IMAGE_FETCH_SUCCESS = 'api/images/IMAGE_FETCH_SUCCESS';
export const IMAGE_FETCH_FAILURE = 'api/images/IMAGE_FETCH_FAILURE';
export const IMAGES_FILTERED = 'api/images/IMAGES_FILTERED';
export const RESET_FILTER_CALLED = 'api/images/RESET_FILTER_CALLED';
export const IMAGE_RESET_CALLED = 'api/images/IMAGE_RESET_CALLED';

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchImageBegin = () => ({ type: IMAGE_FETCH_BEGIN });
export const imagefetchFailure = (error) => ({ type: IMAGE_FETCH_FAILURE, payload: error });
export const imageFetchSuccess = (data) => ({ type: IMAGE_FETCH_SUCCESS, payload: data });
export const imagesFiltered = (filter) => ({
  type: IMAGES_FILTERED,
  payload: { filter },
});

export const resetFilters = () => ({
  type: RESET_FILTER_CALLED,
});

export const clearImage = () => ({ type: IMAGE_RESET_CALLED });
