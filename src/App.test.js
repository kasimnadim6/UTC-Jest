import { render, screen } from '@testing-library/react';
import App from './App';

xdescribe(`App Component`, () => {
  it('should have welcome text', () => {
    render(<App />);
    const welcomeEl = screen.getByText(/Welcome to Unit Testing/i);
    expect(welcomeEl).toBeInTheDocument();
  });
  it('should have app component', () => {
    expect(App).toBeTruthy();
  });
});
