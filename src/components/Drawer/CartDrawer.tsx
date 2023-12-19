/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShoppingCartOutlined } from "@ant-design/icons";

import { useState } from "react";
import { Button, Drawer } from "antd";
import { CloseOutlined,PlusOutlined,MinusOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart, removeFromCart, removeOne } from "../../redux/slice/cartSlice";
import MyButton from "../button/Button";
import { Link } from "react-router-dom";
const CartDrawer = () => {
  const [open, setOpen] = useState(false);
  const cart = useAppSelector((state) => state?.cart);

  const dispatch = useAppDispatch();


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const closeIcon = (
    <MyButton onClick={() => setOpen(!open)} text={<CloseOutlined />} className=" text-xl h-8 w-8 rounded-full flex justify-center items-center -ml-2 mr-3 " />

  );

  return (
    <div className="overflow-hidden">
      <MyButton onClick={showDrawer} text={<ShoppingCartOutlined />} className="ml-2 text-xl h-10 w-10 text-2xl rounded-full flex justify-center items-center" />

      <Drawer
        // title={cart?.total}
        placement="right"
        onClose={onClose}
        open={open}
        closeIcon={closeIcon}
        footer={(
          <div className="h-24">
            <p className="text-lg my-5 text-primary text-center">Total : {cart.total.toFixed(2)}</p>
           
           <div className="flex justify-around font-bold">
           <MyButton text="View cart" className="w-32 text-lg h-9 flex justify-center items-center "/>
          <Link onClick={onClose} to="/checkout"> <MyButton text="Checkout" className="w-32 text-lg h-9 flex justify-center items-center"/></Link>
           </div>
          </div>
        )}
      >
        {cart &&
          cart.products.map((cartItem: any) => (
            <div className="" key={cartItem.id}>
              <div
                style={{ borderBottom: "1px solid #37B149" }}
                className=" m-5 flex "
              >
                <div>
                  <img
                    className="w-20 h-20 rounded"
                    src="https://greengrocery.com.bd/wp-content/uploads/2023/08/pistachio-300x300.jpg"
                  />
                </div>
                <div className="ml-5 flex justify-around items-center">
                  <div>
                  <p className="text-lg font-semibold mb-2">{cartItem?.name}</p>

                  <p className="text-lg text-gray-700 font-semibold">
                    {cartItem?.quantity} x $ {cartItem?.price}{" "}
                  </p>

                  <div className="flex text-primary items-center ml-5 text-xl mt-2 mb-2">
                     
                
                  <MinusOutlined className="bg-primary rounded text-white mr-2" onClick={()=>dispatch(removeOne(cartItem))} />
                  <PlusOutlined className=" bg-primary rounded text-white" onClick={()=> dispatch(addToCart(cartItem))} />
                  </div>

                  </div>
                  <Button className=" bg-white hover:bg-primary border-primary text-xs text-primary hover:text-white w-6 h-7 flex justify-center items-center ml-5">
                    <CloseOutlined
                      className=""
                      onClick={() => dispatch(removeFromCart(cartItem))}
                    />
                  </Button>
                  
                </div>
              </div>
            </div>
          ))}
      </Drawer>
    </div>
  );
};

export default CartDrawer;
