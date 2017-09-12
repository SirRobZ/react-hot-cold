import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Runs onGuess when form is submitted', () => {
      const callback = jest.fn();
      const wrapper = mount(<GuessForm onGuess={callback} />);
      const value = 50;
      wrapper.find('input[type="text"]').node.value = value;
      wrapper.simulate('submit');
      expect(callback).toHaveBeenCalledWith(value.toString());
    });
});
