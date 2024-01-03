/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import { Button , ButtonProps} from 'antd';

type ColorButtonProps = {
  className?: string;
  children?: React.ReactNode;
} & ButtonProps;


const ColorButton = ({ className, children, ...props }: ColorButtonProps) => {
  return (
    <Button className={`${className} bg-primary text-white hover:text-primary hover:bg-white border-primary`} {...props}>
      {children}
    </Button>
  );
};

export default ColorButton;