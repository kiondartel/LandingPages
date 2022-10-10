import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    children: 'LogoLink',
    srcImage: 'assets/images/nvidia.png', //se der ruim usa logo.svg
    link: 'http://localhost',
  },
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: '',
};
