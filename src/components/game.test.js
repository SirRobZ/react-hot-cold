import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Can start a new game', () => {
      const wrapper = shallow(<Game />);
      wrapper.setState({
        guesses: [1,2,3,4,0],
        feedback: 'You got it!',
        correctAnswer: 0
      });
      wrapper.instance().newGame();
      expect(wrapper.state('guesses')).toEqual([]);
      expect(wrapper.state('feedback')).toEqual('Make your guess!');
      expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
      expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    });

    it('Can process a guess', () => {
      const wrapper = shallow(<Game />);
      wrapper.setState({
        correctAnswer: 50
      })
      wrapper.instance().guess(30);
      expect(wrapper.state('guesses')).toEqual([30])
      expect(wrapper.state('feedback')).toEqual('You\'re Warm');

      wrapper.instance().guess(45);
      expect(wrapper.state('guesses')).toEqual([30, 45])
      expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

      wrapper.instance().guess(50);
      expect(wrapper.state('guesses')).toEqual([30, 45, 50])
      expect(wrapper.state('feedback')).toEqual('You got it!');

    })

});
