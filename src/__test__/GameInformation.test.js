import React from 'react'
import { shallow } from 'enzyme'
import GameInformation from '../GameInformation'

describe('<GameInformation />', () => {

    it('renders the header without crashing', () => {
        const component = shallow(<GameInformation />);
        const header = <h1>Rock, Paper, Scissors</h1>
        expect(component.contains(header)).toEqual(true);
      })

})