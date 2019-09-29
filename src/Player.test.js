import React from 'react'
import ReactDOM from 'react-dom'
import Player from './Player'
import { shallow } from 'enzyme'
import sinon from 'sinon'

describe('<Player />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Player />, div)
        ReactDOM.unmountComponentAtNode(div)
    });

});