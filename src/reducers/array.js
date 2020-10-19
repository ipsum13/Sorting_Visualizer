import {
    GENERATE_NEW_ARRAY,
    SET_SIZE
  } from "../actions/types";
  
  
  const initialState = {
    array: [],
    size: null,
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GENERATE_NEW_ARRAY:
        return {
          ...state,
          array: payload.array,
          size: payload.size,
        };
      case SET_SIZE:
          return {
              ...state,
              size: payload.size
          }  
      default:
        return state;
    }
  }
  