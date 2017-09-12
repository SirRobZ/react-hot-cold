import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoModal />);
    });

    it('Runs onClose callback when close button clicked', () => {
      const callback = jest.fn();
      const wrapper = shallow(<InfoModal onClose={callback} />);
      wrapper.find('.close').simulate('click', {
        preventDefault() {}
      });
      expect(callback).toHaveBeenCalled();
    });
});
