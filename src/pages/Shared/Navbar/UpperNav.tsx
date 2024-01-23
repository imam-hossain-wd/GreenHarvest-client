/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dropdown } from "antd";
import { useAppDispatch } from "../../../redux/hooks";
import {
  SearchOutlined,
  DownOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import "./style.css";
import { useEffect, useState } from "react";
import { useGetProductQuery } from "../../../redux/api/productApi";
import useProductState from "../../../hooks/useProductState";
import { setCategory, setSearchTerm } from "../../../redux/slice/productSlice";
import Loading from "../loading/Loading";

const UpperNav = () => {
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState("");
  const productState = useProductState();
  const { data: searchData, isLoading } = useGetProductQuery(productState);

  console.log(searchData, "searchData");

  useEffect(() => {
    dispatch(setSearchTerm(inputValue));
  }, [dispatch, inputValue]);

  // Update input value
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const categoryItems = [
    {
      key: "1",
      label: (
        <div>
          <div className="flex flex-col">
            <Button onClick={() => dispatch(setCategory("Fruits"))} type="text">
              Fruits
            </Button>
            <Button onClick={() => dispatch(setCategory("Fish"))} type="text">
              Fish
            </Button>
            <Button onClick={() => dispatch(setCategory("Rice"))} type="text">
              Rice
            </Button>
            <Button onClick={() => dispatch(setCategory("Meals"))} type="text">
              Meals
            </Button>
            <Button
              onClick={() => dispatch(setCategory("Vegetables"))}
              type="text"
            >
              Vegatables
            </Button>
            <Button onClick={() => dispatch(setCategory("Tea"))} type="text">
              Tea
            </Button>
          </div>
        </div>
      ),
    },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-around">
      <div className="bg-primary px-10 py-2 text-white rounded ml-5">
        <Dropdown
          className="hover:dropdown-open"
          overlayClassName="w-48"
          menu={{ items: categoryItems }}
          placement="bottom"
          arrow={{ pointAtCenter: true }}
        >
          <p className="flex items-center justify-center text-lg">
            Category{" "}
            <span className="text-xs ml-2">
              <DownOutlined />
            </span>
          </p>
        </Dropdown>
      </div>
      <div>
        <div>
          <div className="search-container">
            <input
              className="w-96 px-4 py-2 h-10 text-lg text-[#686868] outline-none rounded hover:border-primary active:border-primary"
              placeholder="Search Product"
              style={{ border: "1px solid #E8E8E8" }}
              value={inputValue}
              onChange={handleInputChange}
            />
            <SearchOutlined
              className="text-primary text-xl"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <Button
          type="primary"
          className="flex justify-center items-center mr-3 bg-primary"
        >
          <WhatsAppOutlined className="text-xl mr-1" />

          <p className="font-bold text-sm">Whatsapp</p>
        </Button>
        <Button
          type="primary"
          className="flex justify-center items-center bg-primary"
        >
          <PhoneOutlined className="text-xl mr-1" />

          <p className="font-bold text-sm">Call Now</p>
        </Button>

      </div>
    </div>
  );
};

export default UpperNav;
