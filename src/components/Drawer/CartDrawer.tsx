/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShoppingCartOutlined } from "@ant-design/icons";

import { useState } from "react";
import { Button, Drawer } from "antd";
import { CloseOutlined,PlusOutlined,MinusOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart, removeFromCart, removeOne } from "../../redux/slice/cartSlice";
import MyButton from "../button/Button";
const CartDrawer = () => {
  const [open, setOpen] = useState(false);
  const cart = useAppSelector((state) => state?.cart);

  const dispatch = useAppDispatch();

  // console.log(cart, "cartitems...");



  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const closeIcon = (
    <Button className=" bg-primary hover:bg-white hover:text-primary hover:border-primary rounded-full hover:border text-lg text-white w-9 h-9 flex justify-center items-center  mr-2">
      <CloseOutlined className="" onClick={() => setOpen(!open)} />
    </Button>
  );

  return (
    <div className="overflow-hidden">
      <Button
        onClick={showDrawer}
        className="bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border text-2xl text-white w-10 h-10 flex justify-center items-center rounded-full"
      >
        <ShoppingCartOutlined />
      </Button>

      <Drawer
        // title={cart?.total}
        placement="right"
        onClose={onClose}
        open={open}
        closeIcon={closeIcon}
        footer={(
          <div className="h-24">
            <p className="text-lg my-5 text-primary text-center">Total : {cart.total}</p>
           
           <div className="flex justify-around font-bold">
           <MyButton text="View cart" className="w-32 text-lg h-10 text-white"/>
           <MyButton text="Checkout" className="w-32 text-lg h-10 text-white"/>
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
