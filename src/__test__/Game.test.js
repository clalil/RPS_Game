import React from 'react'
import Game from '../Components/Game'
import { mount } from 'enzyme'
import sinon from 'sinon'

describe('<Game />', () => {

  it('resets the score board on click', () => {
    const component = mount(<Game />);
    component.setState({ playerScore: 1 });
    component.setState({ opponentScore: 2 });
    component.find('#reset-btn').simulate('click');
    expect(component.state().playerScore).toEqual(0);
    expect(component.state().opponentScore).toEqual(0);
  });

  it('tests the main game functionality using a stub', () => {
      sinon.stub(Math, 'random').returns(0.66)
      const describedComponent = mount(<Game />);
      describedComponent.find('#rock-btn').simulate('click')
      expect(describedComponent.state().gameResult).toEqual('You chose rock and Computer chose paper - Computer won!')
  });

})