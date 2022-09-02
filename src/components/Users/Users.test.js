import { render, screen, waitFor } from '@testing-library/react';
import { fetchApi } from '../../utils/fetchAPI';
import Users from './Users';

jest.mock('../../utils/fetchAPI');
describe('Users component', () => {
  const mockUserList = [
    {
      id: 1,
      name: 'Arun Vijayarengan',
      phone: '+91 786526783',
    },
    {
      id: 2,
      name: 'Kasim Nadim',
      phone: '+91 886132139',
    },
  ];
  it('should have title This is TODO component', () => {
    render(<Users />);
    expect(screen.getByText('Testing using Mock API')).toBeInTheDocument();
  });
  it(`renders component with API data [MOCKING]'`, async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(<Users />);
    await waitFor(() => {
      expect(screen.getByText('Arun Vijayarengan')).toBeInTheDocument();
    });
  });
});
