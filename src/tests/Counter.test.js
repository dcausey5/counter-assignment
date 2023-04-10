// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {setupServer} from 'msw/node'

// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import counter from './Counter.js'
let increment
let decrement

beforeEach('render counter component',async() => {
  // Render the Counter component here
  render(<counter/>)
  increment = screen.getByRole('button',{name:'+'})
  decrement = screen.getByRole('button',{name:'-'})

})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
   
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(counter).toHaveValue(0)
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  expect(counter).toHaveValue(1)
  userEvent.click(increment)
  expect(counter).toHaveValue(2)
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  userEvent.click(increment)
  expect(counter).toHaveValue(2)
  userEvent.click(decrement)
  expect(counter).toHaveValue(1)

});
