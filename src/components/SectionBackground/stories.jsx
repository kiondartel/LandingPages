import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <SectionContainer>
        <div>
          <h1>SectionBackground</h1>
          <p>
            loremIpsum dale cabloco feio da porra, loremIpsum dale cabloco feio
            da porra loremIpsum dale cabloco feio da porra,loremIpsum dale
            cabloco feio da porra loremIpsum dale cabloco feio da
            porra,loremIpsum dale cabloco feio da porra,loremIpsum dale cabloco
            feio da porra loremIpsum
          </p>
        </div>
      </SectionContainer>
    ),
  },

  argsTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
