import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Calls onNewGame when new game is clicked', () => {
      const callback = jest.fn();
      const wrapper = shallow(<TopNav onNewGame={callback} />);
      const newGameButton = wrapper.find('.new');
      newGameButton.simulate('click', {
        preventDefault() {}
      });
      expect(callback).toHaveBeenCalled();
    })
});
