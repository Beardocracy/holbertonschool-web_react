import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { NotificationItem } from './NotificationItem';
import { getLatestNotification } from "../utils/utils";

const htmlObj = {
  __html: getLatestNotification(),
};
const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: htmlObj},
];

describe('<Notifications />', () => {

    it('Notifications renders without crashing', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper).toHaveLength(1);
    });

    it('Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('Notifications renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
        expect(wrapper.find('.Notifications p')).toHaveLength(1);
        expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
    });

    it('First NotificationItem element renders the right HTML', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
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

    it('div.Notifications is displayed when displayDrawer is true', () => {
      const wrapper = shallow(<Notifications displayDrawer={true}/>);
      expect(wrapper.find('.Notifications')).toHaveLength(1);
    });

    it('Renders correctly if you pass an empty array or if you don???t pass the listNotifications property', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);
      expect(wrapper.find('.Notifications')).toHaveLength(1);
      const wrapperTwo = shallow(<Notifications displayDrawer={true}/>);
      expect(wrapperTwo.find('.Notifications')).toHaveLength(1);
    });

    it('when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is', () => {
      const wrapper = shallow(<Notifications displayDrawer={false} />);
      expect(wrapper.find('.Notifications p').text()).not.toEqual('Here is the list of notifications');
      expect(wrapper.find('.Notifications p').text()).toEqual('No new notification for now');
    });

});