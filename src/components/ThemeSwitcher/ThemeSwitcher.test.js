import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
});
