/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Button } from 'antd'; 
//@ts-ignore
const OutletButton = ({ text, className, ...props }) => {
  return (
    <Button className={`${className} bg-white text-primary hover:text-white hover:bg-primary border-primary `} {...props}>
      {text}
    </Button>
  );
};

export default OutletButton;
