import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render', () => {
    renderTheme(<LogoLink>Children</LogoLink>);
    expect(screen.getbYrOLE('HEADING')).toBeInTheDocument();
  });
});