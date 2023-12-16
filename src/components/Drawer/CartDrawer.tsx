import { ShoppingCartOutlined } from "@ant-design/icons";

import { useState } from "react";
import { Drawer } from "antd";

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
      <p
        onClick={showDrawer}
        className="bg-primary text-2xl text-white w-10 h-10 flex justify-center rounded-full"
      >
        <ShoppingCartOutlined />
      </p>

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




