import { render, screen, waitFor } from '@testing-library/react';
import { fetchApi } from '../../utils/fetchAPI';
import Users from './Users';

jest.mock('../../utils/fetchAPI');
describe('Users component', () => {
  const mockUserList = [
    {
      id: 1,
      name: 'Bond',
      phone: '+91 786526783',
    },
    {
      id: 2,
      name: 'James',
      phone: '+91 886132139',
    },
  ];
  it('should have title USERS | Loads data from API', async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(<Users />);
    await waitFor(() => {
      expect(
        screen.getByText('USERS | Loads data from API')
      ).toBeInTheDocument();
    });
  });
  it(`renders component with API data [MOCKING]'`, async () => {
    fetchApi.mockResolvedValue(mockUserList);
    render(<Users />);
    await waitFor(() => {
      expect(screen.getByText('Bond')).toBeInTheDocument();
    });
  });
  it('renders error in comp properly with API data [MOCKING]', async () => {
    fetchApi.mockRejectedValue(new Error('error'));
    render(<Users />);
    await waitFor(() => {
      expect(
        screen.getByText('Unable to load Users. Try again')
      ).toBeInTheDocument();
    });
  });
});
