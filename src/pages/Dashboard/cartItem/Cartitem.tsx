/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
  } from "@ant-design/icons";
import SPTable from "../../../components/Table/SPTable";
import OutletButton from "../../../components/button/Button";



const Cartitem = () => {
    const cartState = useAppSelector((state) => state.cart);
    const { products, total } = cartState;
    console.log(products, total, 'products, cart..');

    const columns = [
      {
        title: "Image",
        dataIndex: "image",
        render: (image: string) => (
          <img
            className="w-20 h-20 rounded-full"
            src={image}
            alt="Product"
            style={{ objectFit: "cover" }} // Add this style for better image rendering
          />
        ),
      },
        {
          title: "Name",
          dataIndex: "name",
        },
        {
          title: "Price",
          dataIndex: "price",
        },
        {
          title: "quantity",
          dataIndex: "quantity"
        },
        {
          title: "Action",
          dataIndex: "id",
          render: function (data: any) {
            return (
              <div className="flex">
                <Link className="mr-2" to={`/super_admin/admin/details/${data?.id}`}>
                    <OutletButton className=" flex items-center justify-center w-10 h-8 rounded">
                  <EyeOutlined  className="text-xl text-black" />
                  </OutletButton>
                </Link>
                <Link className="mr-2" to={`/super_admin/admin/edit/${data?.id}`}>

                    <OutletButton className=" flex items-center justify-center w-10 h-8 rounded">
                  <EditOutlined className="text-xl text-black" />
                  </OutletButton>

                </Link>                 
                 <OutletButton className=" flex items-center justify-center w-10 h-8 rounded">
                  <DeleteOutlined className="text-xl text-black" />
                  </OutletButton>
              </div>
            );
          },
        },
      ];
    
      return (
        <div className="w-[90%] mx-auto">
          {/* <BreadCrumb
            items={[
              {
                label: "super_admin",
                link: "/super_admin",
              },
            ]}
          />
          <ActionBar title="Admin List">
            <div>
              <Link to="/super_admin/admin/create">
                <Button type="primary">Create Admin</Button>
              </Link>
            </div>
          </ActionBar> */}
    
          <SPTable
            // loading={isLoading}
            
            columns={columns}
            dataSource={products}
            // totalPages={meta?.total}
            showSizeChanger={true}
            showPagination={true}
          />
        </div>
      );
    };

export default Cartitem;