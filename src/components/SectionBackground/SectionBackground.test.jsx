import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
  it('should render', () => {
    renderTheme(<SectionBackground>Children</SectionBackground>);
    expect(screen.getbYrOLE('HEADING')).toBeInTheDocument();
  });
});
