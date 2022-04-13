import {
  FETCH_DATA_BEGIN, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS,
  IMAGES_FILTERED,
  IMAGE_FETCH_BEGIN, IMAGE_FETCH_FAILURE, IMAGE_FETCH_SUCCESS,
  IMAGE_RESET_CALLED, RESET_FILTER_CALLED,
} from '../api/data_fetch_statuses';

export function imagesReducer(state = {
  images: [],
  loading: false,
  error: null,
  filter: [],
  filter_tag: 'likes',
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
        filter: [
          ...action.payload.hits.sort((a, b) => b.likes - a.likes),
        ],
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case IMAGES_FILTERED:
      return {
        ...state,
        filter_tag: action.payload.filter,
        filter: [
          ...state.images.sort((a, b) => b[action.payload.filter] - a[action.payload.filter]),
        ],
      };
    case RESET_FILTER_CALLED:
      return {
        ...state,
        filter: [...state.images],
        filter_tag: 'likes',
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
    case IMAGE_RESET_CALLED:
      return {
        ...state,
        image: null,
      };
    default:
      return state;
  }
}
