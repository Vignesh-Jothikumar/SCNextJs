import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeaderProps = ComponentProps & {
  fields: {
    Description: Field<string>;
  };
};

const MavHeader = (props: HeaderProps): JSX.Element => (
  <div className="bg-red-500 text-plus1">
    <p>This is Header Component</p>
    <Text field={props.fields.Description} />
  </div>
);

export default withDatasourceCheck()<HeaderProps>(MavHeader);
