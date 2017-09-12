import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Renders info-modal when toglled on', () => {
      const wrapper = shallow(<Header />);
      wrapper.instance().toggleInfoModal(true);
      expect(wrapper.find('InfoModal').exists()).toEqual(true);
    });
});
