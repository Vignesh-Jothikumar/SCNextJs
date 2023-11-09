import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';

interface ContentRichTextProps {
  content: string;
}

const ContentRichText = ({ content }: ContentRichTextProps): JSX.Element => (
  <div>
    <div className="bg-red-600">
      <p>ContentRichText Component</p>
      <RichText className="text-5xl" field={{ value: content }} />
    </div>
  </div>
);

export default ContentRichText;
