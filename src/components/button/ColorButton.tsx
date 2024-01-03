/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

// import { Button } from 'antd'; 
// //@ts-ignore
// const ColorButton = ({ text, className, ...props }) => {
//   return (
//     <Button className={`${className} bg-primary text-white hover:text-primary hover:bg-white border-primary `} {...props}>
//       {text}
//     </Button>
//   );
// };

// export default ColorButton;


import { Button } from 'antd';



const ColorButton = ({ className, children, ...props }) => {
  return (
    <Button className={`${className} bg-primary text-white hover:text-primary hover:bg-white border-primary`} {...props}>
      {children}
    </Button>
  );
};

export default ColorButton;