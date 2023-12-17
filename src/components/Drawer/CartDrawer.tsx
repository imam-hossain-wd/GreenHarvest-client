import { ShoppingCartOutlined } from "@ant-design/icons";

import { useState } from "react";
import { Button, Drawer } from "antd";

const CartDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="overflow-hidden">
      <Button
        onClick={showDrawer}
        className="bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border text-2xl text-white w-10 h-10 flex justify-center items-center rounded-full"
      >
        <ShoppingCartOutlined />
      </Button>
    
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
        bodyStyle={{ overflow: 'hidden' }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default CartDrawer;




