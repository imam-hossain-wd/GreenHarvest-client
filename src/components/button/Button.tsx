
import { Button } from 'antd'; 

const MyButton = ({ text, className, ...props }) => {
    
  return (
    <Button className={`${className} bg-primary w-full`} {...props}>
      {text}
    </Button>
  );
};

export default MyButton;
