import React from 'react'
import ReactDOM from 'react-dom'
import Player from './Player'
import { shallow } from 'enzyme'

describe('<Player />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Player />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('displays Player\'s choice', () => {
        const component = shallow(<Player onClick={playerWeaponsArray}/>)
        component.find("#rock").simulate("click")
        expect(component.contains('You chose Rock')).toEqual(true);
    })

});