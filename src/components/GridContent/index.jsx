import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './stylesstyled';

export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.Html></Styled.Html>
        <TextComponent>{html}</TextComponent>
      </Styled.Container>
    </SectionBackground>
  );
};
GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
