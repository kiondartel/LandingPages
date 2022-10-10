import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { GridText } from '.';

describe('<GridText />', () => {
  it('should render', () => {
    renderTheme(<GridText>Children</GridText>);
    expect(screen.getbYrOLE('HEADING')).toBeInTheDocument();
  });
});
