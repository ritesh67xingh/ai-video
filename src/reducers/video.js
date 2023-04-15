import {
  GENERATE_VIDEO_REQUEST,
  GENERATE_VIDEO_SUCCESS,
  GENERATE_VIDEO_FAILURE,
} from "../actions/video";

const initialState = {
  loading: false,
  error: null,
  url: null,
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        url: null,
      };
    case GENERATE_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        url: action.payload.url,
      };
    case GENERATE_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        url: null,
      };
    default:
      return state;
  }
};

export default videoReducer;
