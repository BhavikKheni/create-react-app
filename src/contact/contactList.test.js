// import React from 'react';
// import AddContact from './addContact';
// import { mount } from 'enzyme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

// describe('Contact List', () => {
//   let wrapper;
//   const props = [
//     { firstName: 'bhavik', lastName: 'kheni', email: 'kheni.bhavik@gmail.com' },
//     { firstName: 'bhavik', lastName: 'kheni', email: 'kheni.bhavik@gmail.com' }]

//   beforeEach(() => {
//     wrapper = mount(<AddContact />, {
//       context: {
//         muiTheme: getMuiTheme(),
//       },
//       childContextTypes: {
//         muiTheme: React.PropTypes.object.isRequired,
//       },
//     });
//   });

//   it('should render contacts in tabular format', () => {
//     const texts = wrapper.find('.item').map(node => node.text());
//     console.log(wrapper.html());
//     // data.forEach((contact, index) => {
//     //   let tr = table.find('tr').at(index);
//     //   console.log('tr.find',tr.html());
//     // //   expect(tr.find('td').at(1).text()).toEqual(`${contact.firstName} ${contact.lastName}`);
//     // });
//   });

// });