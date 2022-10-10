import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          loremIpsum dale cabloco feio da porra, loremIpsum dale cabloco feio da
          porra loremIpsum dale cabloco feio da porra,loremIpsum dale cabloco
          feio da porra loremIpsum dale cabloco feio da porra,loremIpsum dale
          cabloco feio da porra,loremIpsum dale cabloco feio da porra loremIpsum
        </p>
      </div>
    ),
  },
  argsTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
