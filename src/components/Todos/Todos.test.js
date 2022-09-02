import { render, screen } from '@testing-library/react';
import Todos from './Todos';

xdescribe('Todos component', () => {
  it('should have title This is TODO component', () => {
    render(<Todos />);
    const titleEL = screen.getByTestId('title');
    expect(titleEL.textContent).toBe('This is TODO component');
  });
  it(`loads todos item 'delectus aut autem'`, async () => {
    render(<Todos />);
    expect(await screen.findByText('delectus aut autem')).toBeInTheDocument();
  });
});
