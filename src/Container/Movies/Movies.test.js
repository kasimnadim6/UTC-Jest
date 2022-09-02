import { fireEvent, render, screen } from '@testing-library/react';
import Movies from './Movies';

xdescribe('Movies Component', () => {
  const movieInfo = {
    id: 1,
    name: 'Wanted',
    url: 'https://www.imdb.com/title/tt0493464/mediaviewer/rm1082512384',
  };
  it('should have heading with Welcome to movie portal text', () => {
    render(<Movies />);
    const headingEL = screen.getByTestId('heading');
    expect(headingEL).toHaveTextContent('Welcome to movie portal');
  });

  it('should receive movie name as prop', () => {
    render(<Movies info={movieInfo} />);
    const movieLinkEL = screen.getByTestId('movie-link');
    expect(movieLinkEL).toHaveTextContent(
      'click here to know more about Wanted'
    );
  });
  it('will call clickHandler function', () => {
    render(<Movies info={movieInfo} />);
    const subscribeBtnEL = screen.getByTestId('subscribe-btn');
    fireEvent.click(subscribeBtnEL);
    expect(subscribeBtnEL).toHaveTextContent('Unsubscribe');
    fireEvent.click(subscribeBtnEL);
    expect(subscribeBtnEL.textContent).toBe('Subscribe');
  });
});
