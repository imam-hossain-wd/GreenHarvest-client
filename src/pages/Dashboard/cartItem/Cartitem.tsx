import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { Button } from "antd";
import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
  } from "@ant-design/icons";
import SPTable from "../../../components/Table/SPTable";



const Cartitem = () => {
    const cartState = useAppSelector((state) => state.cart);
    const { products, total } = cartState;
    console.log(products, total, 'products, cart..');

    const columns = [
        {
          title: "Image",
          dataIndex: "userImage",
          render: (userImage: string) => (
            <img
              className="w-20 h-20 rounded-full"
              src={userImage}
              alt="Product"
            />
          ),
        },
        {
          title: "Name",
          dataIndex: "firstName",
        },
        {
          title: "Email",
          dataIndex: "email",
        },
        {
          title: "Contact no.",
          dataIndex: "contactNo",
        },
        {
          title: "Action",
          dataIndex: "id",
          render: function (data: any) {
            return (
              <>
                <Link to={`/super_admin/admin/details/${data.id}`}>
                  <Button onClick={() => console.log(data)} type="primary">
                    <EyeOutlined />
                  </Button>
                </Link>
                <Link to={`/super_admin/admin/edit/${data?.id}`}>
                  <Button
                    style={{
                      margin: "0px 5px",
                    }}
                    onClick={() => console.log(data?.id)}
                    type="primary"
                  >
                    <EditOutlined />
                  </Button>
                </Link>
                <Button onClick={() => console.log(data)} type="primary" danger>
                  <DeleteOutlined />
                </Button>
              </>
            );
          },
        },
      ];
    
      return (
        <div>
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
            dataSource={products.data}
            // totalPages={meta?.total}
            showSizeChanger={true}
            showPagination={true}
          />
        </div>
      );
    };

export default Cartitem;