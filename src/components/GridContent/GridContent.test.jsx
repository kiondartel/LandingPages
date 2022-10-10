import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { GridContent } from '.';

describe('<GridContent />', () => {
  it('should render', () => {
    renderTheme(<GridContent>Children</GridContent>);
    expect(screen.getbYrOLE('HEADING')).toBeInTheDocument();
  });
});
