import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { GridImage } from '.';

describe('<GridImage />', () => {
  it('should render', () => {
    renderTheme(<GridImage>Children</GridImage>);
    expect(screen.getbYrOLE('HEADING')).toBeInTheDocument();
  });
});
