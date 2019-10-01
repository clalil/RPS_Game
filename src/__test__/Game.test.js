import React from 'react'
import ReactDOM from 'react-dom'
import Game from '../Game'
import { mount } from 'enzyme'

describe('<Game />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Game />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('tests if the function logic of updatePlayerChoice works', () => {
        const weaponsArray = ['rock', 'paper', 'scissors']
        let playerChoice = 'rock'
        const randomComputerResult = 'paper'
        let result = 'empty string'
        if (playerChoice === randomComputerResult) {
          result = 'It\'s a draw!'
        } else if (
          (playerChoice === weaponsArray[0] && randomComputerResult === weaponsArray[1])
           || (playerChoice === weaponsArray[1] && randomComputerResult === weaponsArray[2]) 
           || (playerChoice === weaponsArray[2] && randomComputerResult === weaponsArray[0])) {
          result = 'Computer won!'
        } else {
          result = 'You won!'
        };
        expect(result).toEqual('Computer won!')
    });

    it('resets the score board on click', () => {
        const component = mount(<Game />);
        component.setState({ playerScore: 1 });
        component.setState({ opponentScore: 2 });
        component.find('#resetBtn').props().onClick();
        expect(component.state().playerScore).toEqual(0);
        expect(component.state().opponentScore).toEqual(0);
    });

})