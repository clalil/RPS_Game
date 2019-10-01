import React from 'react'
import Game from '../Components/Game'
import { mount } from 'enzyme'
import sinon from 'sinon'

describe('<Game />', () => {

  it('resets the score board on click', () => {
    const component = mount(<Game />);
    component.setState({ playerScore: 1 });
    component.setState({ opponentScore: 2 });
    component.find('#resetBtn').simulate('click');
    expect(component.state().playerScore).toEqual(0);
    expect(component.state().opponentScore).toEqual(0);
  });

  it('tests if the function logic of updatePlayerChoice works', () => {
      sinon.stub(Math, 'random').returns(2)
      const describedComponent = mount(<Game />);
      describedComponent.find('#rock').simulate('click')
      // console.log(describedComponent.state())
      expect(describedComponent.state().gameResult).toEqual('You chose rock and Computer chose paper - You won!')
  });

})