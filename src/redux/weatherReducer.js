import { CLEAR_HISTORY, FETCH_WEATHER_FULFILLED, FETCH_WEATHER_PENDING, FETCH_WEATHER_REJECTED } from "./weatherTypes";

const initialState = {
  data: null,
  status: "idle",
  error: null,
  searchHistory: [],
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_HISTORY:
      return {
        ...state,
        searchHistory: [],
      };
case FETCH_WEATHER_PENDING:
  return {
    ...state,
    status:"loading",
    error: null
  }
case FETCH_WEATHER_FULFILLED:
  return {
    ...state,
    status:"succeed",
    data: action.payload,
    searchHistory: updateSearchHistory(state.searchHistory, action.payload)
  }
case FETCH_WEATHER_REJECTED:
  return {
    ...state,
    status:"failed",
    error: action.payload
  }

    default:
      return state;
  }
}
function updateSearchHistory (history, payload) {
  console.log("i am in reducer")
  const exists = history.some(item => item.id === payload.id);
  if (!exists) {
    const historyItem = {
      ...payload,
      timestamp: new Date().toISOString()
    };
    
    return [historyItem, ...history.slice(0, 4)];
  } else {
    return  [
      { ...payload, timestamp: new Date().toISOString() },
      ...history.filter(item => item.id !== payload.id)
    ];
  }
}


export default weatherReducer;
