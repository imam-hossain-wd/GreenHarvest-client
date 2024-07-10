import SPTable from "../../../components/Table/SPTable";
import { useGetPaymentQuery } from "../../../redux/api/paymentApi";
import Loading from "../../Shared/loading/Loading";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import OutletButton from "../../../components/button/Button";
import { Link } from "react-router-dom";

const Payment = () => {
  const { data, isLoading } = useGetPaymentQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }
  console.log(data, 'payment data..');
  
  const columns = [
    {
      title: "Transaction Id",
      dataIndex: "transactionId",
    },

    {
      title: "UserName",
      dataIndex: "userName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Amount",
      dataIndex: "price",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: string) {
        //@ts-ignore
        const id = data?.id;
        return (
          <div className="flex">
            <Link className="mr-2" to={`/super_admin/admin/details/${id}`}>
              <OutletButton className=" flex items-center justify-center w-10 h-8 rounded">
                <EyeOutlined className="text-xl text-black" />
              </OutletButton>
            </Link>
            <Link className="mr-2" to={`/super_admin/admin/edit/${id}`}>
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
    <div>
      <h1>Dashboard payment page</h1>

      <SPTable
        columns={columns}
        dataSource={data?.data}
        // totalPages={meta?.total}
        showSizeChanger={true}
        showPagination={true}
      />
    </div>
  );
};

export default Payment;
