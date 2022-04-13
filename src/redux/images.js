import {
  FETCH_DATA_BEGIN, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS,
  IMAGE_FETCH_BEGIN, IMAGE_FETCH_FAILURE, IMAGE_FETCH_SUCCESS,
} from '../api/data_fetch_statuses';

export function imagesReducer(state = {
  images: [],
  loading: false,
  error: null,
}, action) {
  switch (action.type) {
    case FETCH_DATA_BEGIN:

      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        images: [
          ...action.payload.hits.sort((a, b) => b.likes - a.likes),
        ],
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export function imageReducer(state = {
  loading: false,
  image: null,
  error: null,
}, action) {
  switch (action.type) {
    case IMAGE_FETCH_BEGIN:

      return {
        ...state,
        loading: true,
      };
    case IMAGE_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case IMAGE_FETCH_SUCCESS:
      return {
        ...state,
        image: action.payload.hits[0],
      };
    default:
      return state;
  }
}
