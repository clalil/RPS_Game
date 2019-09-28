import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme'
import Player from './Player'

describe('<Player />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Player />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('checks if the onClick method exists', () => {
        
    })



});