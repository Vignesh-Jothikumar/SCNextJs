import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ComponentProps } from 'lib/component-props';

type MyCatFactsProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};
export interface CatFacts {
  status: Status;
  _id: string;
  user: string;
  text: string;
  __v: number;
  source: string;
  updatedAt: Date;
  type: string;
  createdAt: Date;
  deleted: boolean;
  used: boolean;
}

export interface Status {
  verified: boolean;
  sentCount: number;
}

const MyCatFacts = (props: MyCatFactsProps): JSX.Element => {
  console.log(props);
  const { isLoading, data, error } = useQuery({
    queryKey: ['mycatfacts'],
    queryFn: () =>
      axios.get<CatFacts[]>('https://cat-fact.herokuapp.com/facts/').then((res) => res.data),
  });
  console.log(data?.length);
  if (data) {
    return (
      <div>
        <div className="text-2xl">My Cat Facts</div>
        <ul className="list-disc">
          {data.map((catfact) => {
            return (
              <li key={catfact._id} className="text-green-600 ">
                {catfact.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div className="text-red-500">Something went worng</div>;
  }
  return <></>;
};

export default MyCatFacts;
