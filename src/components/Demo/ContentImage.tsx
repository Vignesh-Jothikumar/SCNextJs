import { Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

interface ContentImageProps {
  ContentImage: ImageField;
}

const ContentImage = ({ ContentImage }: ContentImageProps): JSX.Element => (
  <div>
    <p>ContentImage Component</p>
    <Image field={ContentImage.value} />
  </div>
);

export default ContentImage;
