/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import OutletButton from "../../../components/button/Button";
import {
    DeleteOutlined,
    EyeOutlined,
  } from "@ant-design/icons";
import SPTable from "../../../components/Table/SPTable";
import { removeFromWishlist } from "../../../redux/slice/wishlistSlice";
import { IProduct } from "../../../types/ProductTypes";
import Swall from 'sweetalert2'

const Wishlist = () => {

  const wishlistItems = useAppSelector((state) => state.wishlist.wishlistItems);
// console.log(wishlistItems, 'wishlistItems');

const handleRemoveWishlist = (product:IProduct)=> {
  removeFromWishlist(product);
  // message.success("Product remove successfully")
  Swall.fire({
    position: "top",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500
  });

}
  
    const columns = [
        {
          title: "Image",
          dataIndex: "image",
          render: (image: string) => (
            <img
              className="w-20 h-20 rounded-full"
              src={image}
              alt="Product"
              style={{ objectFit: "cover" }} 
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
            title: "Action",
            dataIndex: "id",
            render: function ( product:IProduct) {
                //@ts-ignore
                const id = product?.id 
              return (
                <div className="flex">
                  <Link className="mr-2" to={`/super_admin/admin/details/${id}`}>
                      <OutletButton className=" flex items-center justify-center w-10 h-8 rounded">
                    <EyeOutlined  className="text-xl text-black" />
                    </OutletButton>
                  </Link>

                   <OutletButton onClick={()=> handleRemoveWishlist(product)}  className=" flex items-center justify-center w-10 h-8 rounded">
                    <DeleteOutlined className="text-xl text-black" />
                    </OutletButton>
                </div>
              );
            },
          },
        ];

    return (
        <div className="w-full">
            <SPTable
            columns={columns}
            dataSource={wishlistItems}
            showSizeChanger={true}
            showPagination={true}
          />
        </div>
    );
};

export default Wishlist;