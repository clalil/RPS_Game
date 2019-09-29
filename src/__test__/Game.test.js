import React from 'react'
import ReactDOM from 'react-dom'
import Game from '../Game'
import { shallow } from 'enzyme'
import sinon from 'sinon'

describe('<Game />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Game />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('tests if the function logic of updatePlayerChoice works', () => {
        let playerChoice = 'rock'
        const randomComputerResult = 'rock'
        let result = 'empty string'
        if (playerChoice === randomComputerResult) {
          result = `It's a draw!`
        } else if (
          (playerChoice === weaponsArray[0] && randomComputerResult === weaponsArray[1])
           || (playerChoice === weaponsArray[1] && randomComputerResult === weaponsArray[2]) 
           || (playerChoice === weaponsArray[2] && randomComputerResult === weaponsArray[0])) {
          result = `Computer won!`
        } else {
          result = `You won!`
        };
        expect(result).toEqual('It\'s a draw!')
    });

})