import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Company from './Company';

describe(`Company component`, () => {
  it('should be available within app', () => {
    expect(Company).toBeDefined();
  });

  it('should receive props and display it', () => {
    render(<Company name="CTS" />);
    const companyNameEL = screen.getByTestId('companyNameEL');
    expect(companyNameEL).toHaveTextContent('CTS');
  });
  it("has Welcome to My Company's official website", () => {
    render(<Company />);
    const officialTextEL = screen.getByText(
      "Welcome to my Company's official website"
    );
    expect(officialTextEL).toBeInTheDocument();
  });
  it('should have text with color green', () => {
    render(<Company />);
    expect(screen.getByTestId('employee-count')).toHaveStyle('color: green');
  });
  it("has input element with placeholder 'Enter country'", () => {
    render(<Company />);
    expect(screen.getByPlaceholderText('Enter country')).toBeTruthy();
  });
  it('has button element with btn class', () => {
    render(<Company />);
    const btnEl = screen.getByRole('join-cognizant');
    expect(btnEl).toHaveClass('btn');
  });
  it('should update country on onChange event', () => {
    render(<Company />);
    const countryInput = screen.getByPlaceholderText('Enter country');
    fireEvent.change(countryInput, { target: { value: 'India' } });
    expect(countryInput.value).toBe('India');
  });

  it('should have right Company component Snapshot', () => {
    const snapshotJSON = renderer.create(<Company name="Cognizant" />);
    expect(snapshotJSON).toMatchSnapshot();
  });
});
