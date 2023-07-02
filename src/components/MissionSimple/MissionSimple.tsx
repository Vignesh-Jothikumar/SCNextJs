import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Button, Checkbox, TextInput } from '@mantine/core';

type MissionSimpleProps = ComponentProps & {
  fields: {
    Heading: Field<string>;
    Description: Field<string>;
  };
};

const MissionSimple = (): JSX.Element => (
  <>
    <div className="flex flex-col gap-6 bg-gray-400 items-center">
      <div className="flex flex-row gap-8">
        <TextInput label="FirstName" className="text-orange-500 text-minus1" />
        <TextInput label="LastName" className="text-orange-500 text-minus1" />
      </div>
      <div className="flex flex-row gap-8">
        <TextInput label="Email" className="text-orange-500 text-minus1" />
        <TextInput label="Phone Number" className="text-orange-500 text-minus1" />
      </div>
      <div className="flex flex-row gap-8">
        <Checkbox label="Graduated" radius="xs" size="xs" />
      </div>
      <div className="flex flex-row gap-8">
        <Button className={`px-[24px] sm:px-[60px]`}>Submit</Button>
      </div>
    </div>
  </>
);

export default withDatasourceCheck()<MissionSimpleProps>(MissionSimple);
