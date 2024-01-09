/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShoppingCartOutlined } from "@ant-design/icons";

import { useState } from "react";
import { Button, Drawer } from "antd";
import { CloseOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addToCart,
  removeFromCart,
  removeOne,
} from "../../redux/slice/cartSlice";
import { Link } from "react-router-dom";
import OutletButton from "../button/Button";
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
    <OutletButton
      onClick={() => setOpen(!open)}
      className="text-xl h-8 w-8 rounded-full flex justify-center items-center -ml-2 mr-3 "
    >
      <CloseOutlined />
    </OutletButton>
  );

  return (
    <div className="overflow-hidden">
      <OutletButton
        onClick={showDrawer}
        className="ml-2 text-xl h-10 w-10 text-2xl rounded-full flex justify-center items-center"
      >
        <ShoppingCartOutlined />
      </OutletButton>

      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        closeIcon={closeIcon}
        footer={
          cart?.products?.length && (
            <div className="h-24">
              <p className="text-lg my-5 text-primary text-center">
                Total : {cart.total.toFixed(2)}
              </p>

              <div className="flex justify-around font-bold">
                <OutletButton className="w-32 text-lg h-9 flex justify-center items-center">
                  View cart
                </OutletButton>

                <Link onClick={onClose} to="/checkout">
                  {" "}
                  <OutletButton className="w-32 text-lg h-9 flex justify-center items-center">
                    Checkout
                  </OutletButton>
                </Link>
              </div>
            </div>
          )
        }
      >
        <div>
          {
            cart.products?.length < 1 && <div className="flex flex-col justify-center items-center">
              <img className="w-60 h-60" src="https://i.ibb.co/QFN127j/shooping-cart.png" alt="shopping-cart"/>

              <h1 className="text-xl mt-4">Your cart is empty</h1>
              <p className="text-lg mt-3">Please add product to your cart</p>
            </div>
          }
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
                      <p className="text-lg font-semibold mb-2">
                        {cartItem?.name}
                      </p>

                      <p className="text-lg text-gray-700 font-semibold">
                        {cartItem?.quantity} x $ {cartItem?.price}{" "}
                      </p>

                      <div className="flex text-primary items-center ml-5 text-xl mt-2 mb-2">
                        <MinusOutlined
                          className="bg-primary rounded text-white mr-2"
                          onClick={() => dispatch(removeOne(cartItem))}
                        />
                        <PlusOutlined
                          className=" bg-primary rounded text-white"
                          onClick={() => dispatch(addToCart(cartItem))}
                        />
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
        </div>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
