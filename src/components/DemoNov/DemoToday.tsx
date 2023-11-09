import { Text, Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import ContentImage from 'components/Demo/ContentImage';
import ContentRichText from 'components/Demo/ContentRichText';
import { ComponentProps } from 'lib/component-props';

export interface DemoTodayProps extends Partial<ComponentProps> {
  fields: {
    Heading: Field<string>;
    Description: Field<string>;
    Content1: Field<string>;
    Content2: ImageField;
    Content3: Field<string>;
  };
}

const DemoToday = (props: DemoTodayProps): JSX.Element => (
  <div>
    <div>
      <Text field={props.fields.Heading} />
    </div>
    <div>
      <Text field={props.fields.Description} />
    </div>
    <ContentRichText content={props.fields.Content1.value} />
    <ContentImage ContentImage={props.fields.Content2} />
  </div>
);

export default DemoToday;
