import { Text, Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export interface DemoProps extends Partial<ComponentProps> {
  fields: {
    heading: Field<string>;
    description: Field<string>;
  };
}

const Demo = (props: DemoProps): JSX.Element => {
  console.log(props.fields.heading);
  return (
    <div>
      <Text field={props.fields.heading} />
      <Text field={props.fields.description} />
    </div>
  );
};

export default Demo;
