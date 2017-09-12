import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders has the right guess count', () => {
      const wrapper = shallow(<GuessCount count={5} />);
      expect(wrapper.text()).toEqual('Guess #5!');
    })
});
