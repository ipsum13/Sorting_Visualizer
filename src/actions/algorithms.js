import {
  BUBBLE_SORT,
  QUICK_SORT,
  MERGE_SORT,
  SELECTION_SORT,
  INSERTION_SORT,
} from "./types";

import { BubbleSort, MergeSort, SelectionSort, QuickSort, InsertionSort } from "../algorithms";


const PRIMARY_COLOR = 'turquoise'; //Normal color of bars
const SECONDARY_COLOR = 'red'; //Color of bars when they are being compared
const ANIMATION_SPEED_MS = 10;

export const bubbleSort = (array) => (dispatch) => {
  
    //disableSortButtons();
    const animations = BubbleSort(array);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = (i % 4 === 0) || (i % 4 === 1);
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const color = (i % 4 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
            const [barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * ANIMATION_SPEED_MS);
        }
        else {
            const [barIndex, newHeight] = animations[i];
            if (barIndex === -1) {
                continue;
            }
            const barStyle = arrayBars[barIndex].style;
         
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
                arrayBars[barIndex].innerText = arrayBars[barIndex].clientHeight;
            },i * ANIMATION_SPEED_MS);  
        }
    }
    //const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS*animations.length/2 + 3000);
    //setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);  

  dispatch({
    type: BUBBLE_SORT,
    payload: {name: 'Bubble Sort'}
  });
};

export const quickSort = (array) => (dispatch) => {
  //this.disableSortButtons();
  const animations = QuickSort(array);
  for (let i = 0; i < animations.length - 1; i++) {
      const isColorChange = (i % 6 === 0) || (i % 6 === 1);
      const arrayBars = document.getElementsByClassName('array-bar');
      if(isColorChange === true) {
          const color = (i % 6 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
          const [barOneIndex, barTwoIndex] = animations[i];
          if(barOneIndex === -1) {
              continue;
          }
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
          },i * ANIMATION_SPEED_MS);
      }
      else {
          const [barIndex, newHeight] = animations[i];
          if (barIndex === -1) {
              continue;
          }
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
              barStyle.height = `${newHeight}px`;
              arrayBars[barIndex].innerText = arrayBars[barIndex].clientHeight;
          },i * ANIMATION_SPEED_MS);  
      }
  }
  // this.setState({array: sortArray})
  //const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS*animations.length/2 + 3000);
  //setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);  
  dispatch({
    type: QUICK_SORT,
    payload: {name: 'Quick Sort'}
  });
};

export const mergeSort = (array) => (dispatch) => {
  //this.disableSortButtons();
  const animations = MergeSort(array);
  for (let i = 0; i < animations.length; i++) {
      const isColorChange = (i % 3 !== 2);
      const arrayBars = document.getElementsByClassName('array-bar');
      if(isColorChange === true) {
          const [barOneIndex, barTwoIndex] = animations[i];
          const color = (i % 3 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          //If we don't multiply by the index then every animations[i] wait for exactly ANIMATION_SPEED_MS and immediately change into final state
          setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
          },i * ANIMATION_SPEED_MS);
          
      }
      else {
          setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
              arrayBars[barOneIdx].innerText = arrayBars[barOneIdx].clientHeight;
            },i * ANIMATION_SPEED_MS);
      }
  }
  //const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS*animations.length/2 + 3000);
  //setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME); 
  dispatch({
    type: MERGE_SORT,
    payload: {name: 'Merge Sort'}
  });
};

export const insertionSort = (array) => (dispatch) => {
  //disableSortButtons();
        const animations = InsertionSort(array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                    arrayBars[barIndex].innerText = arrayBars[barIndex].clientHeight;
                },i * ANIMATION_SPEED_MS);  
            }
        } 
  dispatch({
    type: INSERTION_SORT,
    payload: {name: 'Insertion Sort'}
  });
};

export const selectionSort = (array) => (dispatch) => {
  // disableSortButtons();
        const animations = SelectionSort(array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                    arrayBars[barIndex].innerText = arrayBars[barIndex].clientHeight;
                },i * ANIMATION_SPEED_MS);  
            }
        }
        // this.setState({array: sortArray})
        // const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS*animations.length/2 + 3000);
        // setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME); 
  dispatch({
    type: SELECTION_SORT,
    payload: {name: 'Selection Sort'}
  });
};
