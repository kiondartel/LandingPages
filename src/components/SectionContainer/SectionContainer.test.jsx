import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('should render', () => {
    renderTheme(<SectionContainer>Children</SectionContainer>);
    expect(screen.getbYrOLE('HEADING')).toBeInTheDocument();
  });
});
