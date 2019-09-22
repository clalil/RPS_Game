import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '../App'

describe('<App />', () => {

    it('displays Player\'s choice', () => {
        const describedComponent = mount(<App />)
        describedComponent.find("#rock").simulate("click")
        expect(describedComponent.contains('You chose "Rock"')).toEqual(true);
    })
})