import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[]}/>);
    });

    it('Renders a list of guesses', () => {
      const guesses = [50, 40, 30];
      const wrapper = shallow(<GuessList guesses={guesses} />);
      const items = wrapper.find('li');
      expect(items.length).toEqual(guesses.length);
      guesses.forEach((guess, index) => {
        expect(items.at(index).text()).toEqual(guess.toString());
      })
    });
});
