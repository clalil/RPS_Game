import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '../App'
import { exportAllDeclaration } from '@babel/types'

describe('<App />', () => {

    it('displays Player\'s choice', () => {
        const describedComponent = mount(<App />)
        describedComponent.find("#rock").simulate("click")
        expect(describedComponent.contains('You chose Rock')).toEqual(true);
    })

    it('displays Computer\'s choice', () => {
        const describedComponent = mount(<App />)
        describedComponent.find('#startGame').simulate("click")
        expect(describedComponent.contains('Computer chose')).toBeTruthy;
    })

    it('does not display winner/computer choice before a weapon has been selected', () => {
        const describedComponent = mount(<App />)
        describedComponent.find('#startGame').simulate('click')
        expect(describedComponent.contains('You need to choose a weapon')).toEqual(true)
    })

})