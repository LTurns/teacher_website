import React from 'react';
import ReactDOM from 'react-dom';
import About from './about';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import renderer from "react-test-renderer"

describe('About', () => {

 afterEach(cleanup);

 // you can pass a combination of props and make different snapshots for them - to make sure each variation renders. 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
  ReactDOM.unmountComponentAtNode(div);
});
})

// you can use props to check whether your tests are working. Props can be like mocks -
// you can create a prop constant, then expect your element to have this same content - this way you nknow the prop is working. 

// clean up your tests everytime - using afterEach or beforeEach -

