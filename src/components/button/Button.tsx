/* eslint-disable @typescript-eslint/ban-ts-comment */

// import { Button } from 'antd'; 
// //@ts-ignore
// const OutletButton = ({ text, className, ...props }) => {
//   return (
    // <Button className={`${className} bg-white text-primary hover:text-white hover:bg-primary border-primary `} {...props}>
    //   {text}
    // </Button>
//   );
// };

// export default OutletButton;

import React from 'react';
import { Button, ButtonProps } from 'antd';

type ColorButtonProps = ButtonProps & {
  className?: string;
};

const OutletButton: React.FC<ColorButtonProps> = ({ className, children, ...props }) => {
  return (
    <Button className={`${className || ''} bg-white text-primary hover:text-white hover:bg-primary border-primary`} {...props}>
      {children}
    </Button>
  );
};

export default OutletButton;

