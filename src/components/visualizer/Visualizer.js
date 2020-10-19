import React, { useEffect } from "react";
import { connect } from "react-redux";
import { generateNewArray } from "../../actions/array";
import "./index.css";
import $ from "jquery";

const Visualizer = ({ array: { array, size }, generateNewArray }) => {
  useEffect(() => {
    generateNewArray();
  }, []);

  const numWidth = Math.floor($(document).width() / (size * 3));
  const width = `${numWidth}px`;
  const numMargin =
      size < 11
      ? 6
      : size < 26
      ? 4
      : size < 51
      ? 2
      : size < 76
      ? 1.5
      : size < 101
      ? 1
      : 1;
  const margin = `${numMargin}px`;
  const color = numWidth > 20 ? "white" : "transparent";
  const numFont =
    numWidth > 70
      ? 20
      : numWidth > 60
      ? 18
      : numWidth > 50
      ? 16
      : numWidth > 40
      ? 14
      : numWidth > 30
      ? 12
      : numWidth > 20
      ? 10
      : 8;
  const fontSize = `${numFont}px`;

  return (
    <div className="array-container">
      {array.map((value, idx) => (
        <div
          className="array-bar"
          key={idx}
          style={{
            backgroundColor: "lightGreen",
            height: `${value}px`,
            width: width,
            marginLeft: margin,
            marginRight: margin,
            fontSize: fontSize,
            color: color,
          }}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  array: state.array,
});
export default connect(mapStateToProps, { generateNewArray })(Visualizer);
