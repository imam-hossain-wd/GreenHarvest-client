/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable react-hooks/exhaustive-deps */

import { ReloadOutlined, SearchOutlined, UpSquareFilled , DownSquareFilled} from "@ant-design/icons";
import { Select, Pagination } from "antd";
import { SubmitHandler } from "react-hook-form";
import Form from "../../../components/Forms/Form";
import FormInput from "../../../components/Forms/InputForm";
import { categoryOptions, sortOptions } from "../../../constants/global";
import ColorButton from "../../../components/button/ColorButton";
import './style.css';
import { setCategory, setLimit, setPage, setSearchTerm, setSortBy, setSortOrder } from "../../../redux/slice/productSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useGetProductQuery } from "../../../redux/api/productApi";
import Loading from "../loading/Loading";
import { useEffect } from "react";


type Inputs = {
  search: string;
  sortBy?: string;
  sortOrder?: string;
};

const SearchFiltering = () => {

  const dispatch = useAppDispatch()

 const { searchTerm, sortBy, sortOrder, page, limit,category } = useAppSelector(state => state.product);
  // const minPrice=200;
  // const maxPrice=1500;
  // const category = "Vegetables";
  //@ts-ignore
  const { data: products, isLoading, refetch } = useGetProductQuery({ searchTerm, sortBy, sortOrder , page, limit, category});

  useEffect(() => {
    refetch();
  }, [searchTerm, sortBy, sortOrder,category, refetch]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(setSearchTerm(data.search));
  };

  const handleClearFilters = () => {
    dispatch(setSearchTerm(""));
    refetch();
  };


  const handleSortBy = (value: string) => {
    console.log(value);
    dispatch(setSortBy(value));
  };

  const handleCategory = (value: string) => {
    dispatch(setCategory(value));
  };


  if (isLoading) return <Loading />;
if (!products) return <h1>No products found</h1>;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-around p-4 w-full mx-auto rounded ">
      <div className="flex items-center">
        <div className="flex items-center">
          <p className=" lg:ml-0 mr-2">SortBy :</p>
            <Select
            className="w-32 mr-2"
              defaultValue="name"
              onChange={handleSortBy}
              options={sortOptions}
            />
        </div>
       

        <div className="flex justify-center items-center ">
 {sortOrder === 'asc' ? (
      <UpSquareFilled onClick={() => dispatch(setSortOrder("desc"))} className="text-3xl text-primary" />
    ) : (
      <DownSquareFilled onClick={() => dispatch(setSortOrder("asc"))} className="text-3xl text-primary" />
    )}
        </div>
        <div className="flex items-center">
            <Select
            className="w-40 mr-2 ml-4 text-primary green-select text-"
              defaultValue="Select category"
              onChange={handleCategory}
              options={categoryOptions}
            />
        </div>

      </div>
      <div className="flex justify-evenly  lg:mt-0 items-center ">
      <Form submitHandler={onSubmit}>
        <div className="flex items-center">
          <div className="w-36 mr-4 ml-4">
            <FormInput name="search" type="text" size="middle" />
          </div>

                    <ColorButton className="  h-8 mr-8 text-white flex justify-center items-center text-[17px]  font-semibold transition ease-in-out delay-150 duration-500"
            htmlType="submit">
          <SearchOutlined className="text-xl"/>
             Search
          </ColorButton>
        </div>
      </Form>
      
      <ColorButton onClick={handleClearFilters} className="-ml-3 h-8 text-white flex justify-center items-center text-[17px]  font-semibold transition ease-in-out delay-150 duration-500"
            htmlType="submit">
          <ReloadOutlined />
        Clear
          </ColorButton>
      </div>
    </div>
  );
};

export default SearchFiltering;



export const IPagination = () => {

  const dispatch = useAppDispatch();

  const { searchTerm, sortBy, sortOrder, page, limit } = useAppSelector(state => state.product);
  const category = "";
  //@ts-ignore
  const { data: products, isLoading } = useGetProductQuery({ searchTerm, sortBy, sortOrder , page, limit, category});
  const meta = products?.meta;
  console.log(meta);

  // console.log(products, 'products products');
  // console.log(products?.meta, 'meta');
  const handlePageChange = (page:number, pageSize:number) => {
    dispatch(setPage(Number(page)));
    dispatch(setLimit(Number(pageSize)));
  
    // console.log("Current page hanle 1: ", page);
    // console.log("Current pageSize hanle 1: ", pageSize);
  };

  if(isLoading){
    return <Loading />
  }

  return (
    <div className="mt-20">
      <Pagination
        total={meta?.total}
        defaultPageSize={meta?.limit}
        defaultCurrent={1}
        onChange={handlePageChange}
        className="custom-pagination"
      />

    </div>
  );
};


import  { useState } from 'react';
import { Col, InputNumber, Row, Slider } from 'antd';

export const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue: number) => {
    setInputValue(newValue);
  };

  return (
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={500}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={20}
          style={{ margin: '0 16px' }}
          value={inputValue}
          //@ts-ignore
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};



// export const App = () => {
//   const [sliderValue, setSliderValue] = useState([20, 200]);

//   const handleSliderChange = (value:number[]) => {
//     setSliderValue(value);
//     console.log('Slider Value:', value);
//   };

//   return (
//     <div className="mr-10 w-60">
//       <p>Price</p>
//       <Slider
//         range
//         defaultValue={[20, 200]}
//         onChange={handleSliderChange}
//         value={sliderValue}
//         className="green-slider"
//       />
//       {/* ৳33,490.00 - ৳40,490.00 */}
//       <div> $ {sliderValue.join(' - $ ')}</div>
//     </div>
//   );
// };


export const App = () => {
  const [sliderValue, setSliderValue] = useState([20, 200]);

  const handleSliderChange = (event:any) => {
    const { value, name } = event.target;
    const newValue = [...sliderValue];
    newValue[name === "slider1" ? 0 : 1] = Number(value);
    setSliderValue(newValue);
  };

  return (
    <div className="custom-slider-container">
      <p>Price Range</p>
      <div className="slider">
        <input 
          type="range" 
          min="0" 
          max="500" 
          value={sliderValue[0]} 
          className="range-slider" 
          id="slider1"
          name="slider1"
          onChange={handleSliderChange}
        />
        <input 
          type="range" 
          min="0" 
          max="500" 
          value={sliderValue[1]} 
          className="range-slider" 
          id="slider2"
          name="slider2"
          onChange={handleSliderChange}
        />
        <div className="slider-value">
          <span>$ {sliderValue[0]}</span> - <span>$ {sliderValue[1]}</span>
        </div>
      </div>
    </div>
  );
};







