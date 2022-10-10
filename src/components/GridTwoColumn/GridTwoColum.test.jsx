import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { GridTwoColum } from '.';

describe('<GridTwoColum />', () => {
  it('should render', () => {
    renderTheme(<GridTwoColum>Children</GridTwoColum>);
    expect(screen.getbYrOLE('HEADING')).toBeInTheDocument();
  });
});
