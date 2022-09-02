import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

xdescribe('Counter Component', () => {
  it('should render', () => {
    expect(Counter).toBeDefined();
  });
  it('has initial counter value 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('counterValue').textContent).toBe('0');
  });
  it('updated counter', () => {
    render(<Counter />);
    const incrementBtn = screen.getByRole('incrementBtn');
    const decrementBtn = screen.getByRole('decrementBtn');
    const counterEl = screen.getByTestId('counterValue');

    expect(counterEl.textContent).toBe('0');
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('counterValue').textContent).toBe('2');
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('counterValue').textContent).toBe('1');
  });
});
