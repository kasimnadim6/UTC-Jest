import { render, screen } from '@testing-library/react';
import Todos from './Todos';

describe('Todos component', () => {
  it('should have title This is TODO component', () => {
    render(<Todos />);
    const titleEL = screen.getByTestId('title');
    expect(titleEL.textContent).toBe('This is TODO component');
  });
  it(`loads todos item 'et porro tempora'`, async () => {
    render(<Todos />);
    expect(await screen.findByText('et porro tempora')).toBeInTheDocument();
  });
});
