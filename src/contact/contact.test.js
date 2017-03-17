import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import  AddContact  from './addContact';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
describe('(Component) Contact', () => {
  let wrapper,onSave;
  beforeEach(() => {
onSave = jest.fn();
    wrapper = mount(<AddContact handleSubmit={onSave}/>, {
      context: {
        muiTheme: getMuiTheme(),
      },
      childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
      },
    });
  });

  it('renders create contact components', () => {
    
    const firstName = wrapper.find('[name="firstName"]');
    const lastName = wrapper.find('[name="lastName"]');
    const email = wrapper.find('[name="email"]');

    firstName.simulate('change', { target: { value: 'Bhavik' } });
    lastName.simulate('change', { target: { value: 'Kheni' } });
    email.simulate('change', { target: { value: 'Kheni.Bhavik@gmail.com' } });

    expect(onSave).not.toHaveBeenCalled();
    wrapper.find('form').simulate('submit');

  });

  it('should clear the form on submit', () => {
    let form = wrapper.find('form');
    let getControlValue = (name) => form.find(`[name="${name}"]`).props().value;

    const firstName = wrapper.find('[name="firstName"]');
    const lastName = wrapper.find('[name="lastName"]');
    const email = wrapper.find('[name="email"]');

    firstName.simulate('change', { target: { value: 'Bhavik' } });
    lastName.simulate('change', { target: { value: 'Kheni' } });
    email.simulate('change', { target: { value: 'Kheni.Bhavik@gmail.com' } });
    wrapper.find('form').simulate('submit');

    expect(getControlValue('firstName')).toEqual('');
    expect(getControlValue('lastName')).toEqual('');
    expect(getControlValue('email')).toEqual('');

  });
});
