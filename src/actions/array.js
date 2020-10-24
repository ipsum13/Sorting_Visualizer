import { SET_SIZE, GENERATE_NEW_ARRAY } from "./types";

let WINDOW_HEIGHT = window.innerHeight;

export const setSize = (size) => (dispatch) => {
  dispatch({
    type: SET_SIZE,
    payload: size,
  });
  dispatch(generateNewArray(size));
};

export const generateNewArray = (size = 10) => (dispatch) => {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(randomIntFromInterval(25, WINDOW_HEIGHT - 30));
  }

  dispatch({
    type: GENERATE_NEW_ARRAY,
    payload: { array, size },
  });
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
