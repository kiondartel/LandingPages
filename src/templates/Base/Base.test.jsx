import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { Base } from '.';

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base>Children</Base>);
    expect(screen.getbYrOLE('HEADING')).toBeInTheDocument();
  });
});
