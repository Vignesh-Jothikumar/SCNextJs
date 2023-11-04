import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FooterProps = ComponentProps & {
  fields: {
    Description: Field<string>;
  };
};

const Footer = (props: FooterProps): JSX.Element => (
  <div className="bg-red-500 text-plus1">
    <p>This is Footer Component</p>
    <Text field={props.fields.Description} />
  </div>
);

export default withDatasourceCheck()<FooterProps>(Footer);
