import { GridTwoColum } from './GridTwoColum.test';
import { mock } from './mock';
export default {
  title: 'GridTwoColum',
  component: GridTwoColum,
  args: mock,
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColum {...args} />
    </div>
  );
};
