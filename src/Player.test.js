import React from 'react'
import ReactDOM from 'react-dom'
import Player from './Player'
import { shallow } from 'enzyme'
import sinon from 'sinon'

describe('<Player />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Player />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // it('displays Player\'s choice', () => {
    //     const onButtonClick = sinon.spy()
    //     const component = shallow(<Player onClick={updatePlayerChoice}/>)
    //     component.find("#rock").simulate("click")
    //     expect(onButtonClick).to.have.property('rock');
    // })

});