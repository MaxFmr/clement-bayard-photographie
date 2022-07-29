import categories from './categories';

interface props {
  url: string;
}

const SmartPhoneDisplay = ({ url }: props): JSX.Element => {
  return (
    <img
      src={url}
      alt=''
      style={{ height: '200px', width: '100%', objectFit: 'cover' }}
    />
  );
};
export default SmartPhoneDisplay;
