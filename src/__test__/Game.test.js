import React from 'react'
import { mount } from 'enzyme'
import App from '../App'

describe('<Game />', () => {

    it('displays Player\'s choice', () => {
        const describedComponent = mount(<App />)
        describedComponent.find("#rock").simulate("click")
        expect(describedComponent.contains('You chose Rock')).toEqual(true);
    })

    it('displays Computer\'s choice', () => {
        const describedComponent = mount(<App />)
        describedComponent.find('#rock').simulate("click")
        expect(describedComponent.contains('Computer chose')).toBeTruthy;
    })

    it('displays the Winner of the game', () => {
        const describedComponent = mount(<App />)
        describedComponent.find('#rock').simulate("click")
        expect(describedComponent.contains('won')).toBeTruthy;
    })

})