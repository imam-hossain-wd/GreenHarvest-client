/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Button } from 'antd'; 
//@ts-ignore
const MyButton = ({ text, className, ...props }) => {
    
  return (
    <Button className={`${className} bg-primary hover:text-primary hover:border-primary hover:bg-white`} {...props}>
      {text}
    </Button>
  );
};

export default MyButton;
