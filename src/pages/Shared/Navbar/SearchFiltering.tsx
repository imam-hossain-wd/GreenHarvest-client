
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { ReloadOutlined, SearchOutlined, UpSquareFilled , DownSquareFilled} from "@ant-design/icons";
import { Select } from "antd";
import { SubmitHandler } from "react-hook-form";
import Form from "../../../components/Forms/Form";
import FormInput from "../../../components/Forms/InputForm";
import { sortOptions } from "../../../constants/global";
import ColorButton from "../../../components/button/ColorButton";
import './style.css';
import { setSearchTerm, setSortBy, setSortOrder } from "../../../redux/slice/productSlice";
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

  const { searchTerm, sortBy, sortOrder } = useAppSelector(state => state.product);
  const { data: products, isLoading, refetch } = useGetProductQuery({ searchTerm, sortBy, sortOrder });

  // console.log(sortOrder, 'sortOrder sortOrder');

  // console.log(products, 'product data..');
console.log(searchTerm, 'searchTerm searchTerm');
  useEffect(() => {
    refetch();
  }, [searchTerm, sortBy, sortOrder, refetch]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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

  if (isLoading) return <Loading />;
if (!products) return <h1>No products found</h1>;

  return (
    <div className="flex flex-col lg:flex-row rounded items-center p-4 w-full lg:w-[75%] mx-auto rounded ">
      <div className="flex items-center">
        <div className="flex items-center">
          <p className=" lg:ml-0 mr-2">SortBy :</p>
            <Select
            className="w-24 mr-2"
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