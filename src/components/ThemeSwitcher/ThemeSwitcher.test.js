import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { shallow } from 'enzyme';
import ThemeSwitcher from './ThemeSwitcher';

describe('ThemeSwitcher component', () => {
  it('has toggling theme button', () => {
    render(<ThemeSwitcher />);
    const paraEl = screen.getByText(/current theme/i);
    const switchThemeEl = screen.getByText(/switch theme/i);
    expect(paraEl).toHaveTextContent(/light/i);
    fireEvent.click(switchThemeEl);
    expect(paraEl).toHaveTextContent(/dark/i);
  });

  // -------------------------------------------ENZYME-------------------------------------------
  // The following tests use Enzyme with unofficial adapter
  // you need to configure enzyme to use the adapter
  // Refer: setupTests.js for it

  it('should have para element', () => {
    // shallow rendering will test only this component, not any child
    const wrapper = shallow(<ThemeSwitcher />);
    expect(wrapper.find('p')).toHaveLength(1);
  });
  it('should have anchor tag with text Refer Enzyme official document.', () => {
    const wrapper = shallow(<ThemeSwitcher />);
    expect(
      wrapper.find('a').contains('Refer Enzyme official document.')
    ).toEqual(true);
  });
  it('should have button with handler', () => {
    const wrapper = shallow(<ThemeSwitcher />);
    expect(wrapper.find('p').contains('light')).toEqual(true);

    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').contains('dark')).toEqual(true);

    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').contains('light')).toEqual(true);
  });
});
