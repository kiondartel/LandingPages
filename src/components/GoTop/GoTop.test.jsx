import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { GoTop } from '.';

describe('<GoTop />', () => {
  it('should render', () => {
    renderTheme(<GoTop>Children</GoTop>);
    expect(screen.getbYrOLE('HEADING')).toBeInTheDocument();
  });
});
