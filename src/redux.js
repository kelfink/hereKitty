// action types
const DOG_API_CALL_REQUEST = "DOG_API_CALL_REQUEST";
const DOG_API_CALL_SUCCESS = "DOG_API_CALL_SUCCESS";
const DOG_API_CALL_FAILURE = "DOG_API_CALL_FAILURE";

const CAT_API_CALL_REQUEST = "CAT_API_CALL_REQUEST";
const CAT_API_CALL_SUCCESS = "CAT_API_CALL_SUCCESS";
const CAT_API_CALL_FAILURE = "CAT_API_CALL_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  cat: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case DOG_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
      break;
    case DOG_API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: action.dog };
      break;
    case DOG_API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
      break;
    case CAT_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
      break;
    case CAT_API_CALL_SUCCESS:
      return { ...state, fetching: false, cat: action.cat };
      break;
    case CAT_API_CALL_FAILURE:
      return { ...state, fetching: false, cat: null, error: action.error };
      break;
    default:
      return state;
  }
}
