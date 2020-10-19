import React from "react";
import { connect } from "react-redux";
import { generateNewArray, setSize } from "../../actions/array";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import {
  bubbleSort,
  insertionSort,
  quickSort,
  mergeSort,
  selectionSort,
} from "../../actions/algorithms";
import DarkModeToggle from "../DarkMode/DarkModeToggle";

const Topbar = ({
  array: { array, size },
  generateNewArray,
  setSize,
  bubbleSort,
  quickSort,
  mergeSort,
  insertionSort,
  selectionSort,
}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#">Sorting Visualizer</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">
            <Button
              variant="light"
              block
              onClick={() => generateNewArray(size)}
            >
              Generate New Array
            </Button>
          </Nav.Link>

          <NavDropdown
            title="Size"
            id="collasible-nav-dropdown"
            className="m-2"
          >
            <NavDropdown.Item href="#">
              <Button variant="light" block onClick={() => setSize(10)}>
                Size 10
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <Button variant="light" block onClick={() => setSize(25)}>
                Size 25
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <Button variant="light" block onClick={() => setSize(50)}>
                Size 50
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <Button variant="light" block onClick={() => setSize(75)}>
                Size 75
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <Button variant="light" block onClick={() => setSize(100)}>
                Size 100
              </Button>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title="Sorting Algorithm"
            id="collasible-nav-dropdown"
            className="m-2"
          >
            <NavDropdown.Item href="#">
              <Button variant="light" block onClick={() => bubbleSort(array)}>
                Bubble Sort
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <Button variant="light" block onClick={() => quickSort(array)}>
                Quick Sort
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <Button variant="light" block onClick={() => mergeSort(array)}>
                Merge Sort
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <Button
                variant="light"
                block
                onClick={() => selectionSort(array)}
              >
                Selection Sort
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <Button
                variant="light"
                block
                onClick={() => insertionSort(array)}
              >
                Insertion Sort
              </Button>
            </NavDropdown.Item>
            {/* <NavDropdown.Item href="#"><Button variant="light" block onClick={() => bubbleSort(array)}>Bubble Sort</Button></NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
        <Nav>
          <div>
            <DarkModeToggle />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  array: state.array,
  algorithm: state.algorithms,
});

export default connect(mapStateToProps, {
  generateNewArray,
  setSize,
  bubbleSort,
  quickSort,
  mergeSort,
  selectionSort,
  insertionSort,
})(Topbar);
