
import { Button } from 'antd'; 

const MyButton = ({ text, className, ...props }) => {
    
  return (
    <Button className={`${className} bg-primary hover:text-primary hover:border-primary hover:bg-white w-full`} {...props}>
      {text}
    </Button>
  );
};

export default MyButton;
