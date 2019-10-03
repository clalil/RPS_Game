import React from 'react'
import Game from '../Components/Game'
import { mount } from 'enzyme'

describe('<Game />', () => {
  let describedComponent
  beforeEach(() => {
    describedComponent = mount(<Game />);
  });

  afterEach(() => {
    sinon.restore();
  })

  it('resets the score board on click', () => {
    describedComponent.setState(prevState => ({ playerScore: prevState.playerScore + 1 }));
    describedComponent.setState(prevState => ({ opponentScore: prevState.opponentScore + 1 }));
    describedComponent.find('#reset-btn').simulate('click');
    expect(describedComponent.state().playerScore).toEqual(0);
    expect(describedComponent.state().opponentScore).toEqual(0);
  });

  it('shows computer as the winner if scissors beats rock', () => {
    sinon.stub(Math, 'random').returns(0.66)
    describedComponent.find('#rock-btn').simulate('click')
    expect(describedComponent.state().gameResult).toEqual('You chose rock and Computer chose paper - Computer wins!')
  });

  it('shows a tied result if both player and computer choose rock', () => {
    sinon.stub(Math, 'random').returns(0.33)
    describedComponent.find('#rock-btn').simulate('click')
    expect(describedComponent.state().gameResult).toEqual("You chose rock and Computer chose rock - It\'s a tie!")
  });

  it('shows player as the winner if rock beats scissors', () => {
    sinon.stub(Math, 'random').returns(0.99)
    describedComponent.find('#rock-btn').simulate('click')
    expect(describedComponent.state().gameResult).toEqual("You chose rock and Computer chose scissors - You win!")
  });

})