import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { NotificationItem } from './NotificationItem';


describe('<Notifications />', () => {

    it('Notifications renders without crashing', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper).toHaveLength(1);
    });

    it('Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('Notifications renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('.Notifications p')).toHaveLength(1);
        expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
    });

    it('First NotificationItem element renders the right HTML', () => {
      const wrapper = shallow(<Notifications displayDrawer={true}/>);
      expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>')
    });

    it('Menu item displays when displayDrawer is false', () => {
      const wrapper = shallow(<Notifications displayDrawer={false}/>);
      expect(wrapper.find('.menuItem')).toHaveLength(1);
    });

    it('menu item is displayed when displayDrawer is true', () => {
      const wrapper = shallow(<Notifications displayDrawer={true}/>);
      expect(wrapper.find('.Notifications')).toHaveLength(1);
    });

    it('div.Notifications is not displayed when displayDrawer is false', () => {
      const wrapper = shallow(<Notifications displayDrawer={false}/>);
      expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it('div.Notifications is displayed when displayDrawer is true', () => {
      const wrapper = shallow(<Notifications displayDrawer={true}/>);
      expect(wrapper.find('.Notifications')).toHaveLength(1);
    });


    

});