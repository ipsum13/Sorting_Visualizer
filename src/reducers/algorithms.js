import {
  BUBBLE_SORT,
  QUICK_SORT,
  MERGE_SORT,
  SELECTION_SORT,
  INSERTION_SORT,
} from "../actions/types";


const initialState = {
  algorithm: null,
  isSorted: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case BUBBLE_SORT:
    case QUICK_SORT:
    case MERGE_SORT:
    case SELECTION_SORT:
    case INSERTION_SORT:
      return {
        ...state,
        isSorted: true,
        algorithm: payload.name,
      };
    default:
      return state;
  }
}
