import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type DemoProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const Demo = (props: DemoProps): JSX.Element => (
  <div>
    <p>Demo Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<DemoProps>(Demo);
