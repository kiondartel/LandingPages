import { Menu } from '../../components/Menu';
import P from 'prop-types';
import * as Styled from './styles';
import { GoTop } from '../../components/GoTop';
import { Footer } from '../../components/Footer';

export const Base = ({ links, logoData, html, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer html={html} />
      </Styled.Container>
      <GoTop />
    </>
  );
};
Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  html: P.string.isRequired,
};
