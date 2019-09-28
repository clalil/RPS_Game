import React from 'react'
import ReactDOM from 'react-dom'
import Game from '../Game'
import { shallow } from 'enzyme'

describe('<Game />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Game />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('should have an initial state', () => {
      const component = shallow(<Game />)
      expect(component.state(gameResult)).toEqual(null);
      expect(component.state(playerScore)).toEqual(0);
      expect(component.state(opponentScore)).toEqual(0);
    })

})