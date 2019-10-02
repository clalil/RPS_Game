import React from 'react'
import Game from '../Components/Game'
import { mount } from 'enzyme'
import sinon from 'sinon'

describe('<Game />', () => {

  it('resets the score board on click', () => {
    const describedComponent = mount(<Game />);
    describedComponent.setState({ playerScore: 1 });
    describedComponent.setState({ opponentScore: 2 });
    describedComponent.find('#reset-btn').simulate('click');
    expect(describedComponent.state().playerScore).toEqual(0);
    expect(describedComponent.state().opponentScore).toEqual(0);
  });

  it('shows computer as the winner if scissors beats rock', () => {
      sinon.stub(Math, 'random').returns(0.66)
      const describedComponent = mount(<Game />);
      describedComponent.find('#rock-btn').simulate('click')
      expect(describedComponent.state().gameResult).toEqual('You chose rock and Computer chose paper - Computer wins!')
      sinon.restore();
  });

  it('shows a tied result if both player and computer choose rock', () => {
    sinon.stub(Math, 'random').returns(0.33)
    const describedComponent = mount(<Game />);
    describedComponent.find('#rock-btn').simulate('click')
    expect(describedComponent.state().gameResult).toEqual("You chose rock and Computer chose rock - It\'s a tie!")
    sinon.restore();
  });

  it('shows player as the winner if rock beats scissors', () => {
    sinon.stub(Math, 'random').returns(0.99)
    const describedComponent = mount(<Game />);
    describedComponent.find('#rock-btn').simulate('click')
    expect(describedComponent.state().gameResult).toEqual("You chose rock and Computer chose scissors - You win!")
    sinon.restore();
  });

})