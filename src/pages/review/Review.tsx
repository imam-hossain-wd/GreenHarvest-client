/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from "../../components/Forms/Form";
import { getUserInfo } from "../../utils/auth.Services";
import FormRateField from "../../components/Forms/Rate";
import FormTextArea from "../../components/Forms/FormTextArea";
import { useGetSingleUserQuery } from "../../redux/api/userApi";
import Loading from "../Shared/loading/Loading";
import ColorButton from "../../components/button/ColorButton";
import FormInput from "../../components/Forms/InputForm";
import { Rate, message } from "antd";
import {
  useAddProductReviewMutation,
  useGetReviewsQuery,
} from "../../redux/api/reviewApi";
import { IReview } from "../../types/ProductTypes";
import { UserOutlined } from "@ant-design/icons";

interface IReviewProductName {
  productName: string;
}

const Review = ({ productName }: IReviewProductName) => {
  const [addProductReview] = useAddProductReviewMutation();
  const user: any = getUserInfo();
  const { data: review } = useGetReviewsQuery(undefined);
  const { data, isLoading } = useGetSingleUserQuery(user?._id);

  const reviewDatas = review?.data;
  const userData = data?.data;

  const onSubmit = async (values: any) => {
    const comment = values.comment;
    const rating = values.rating;
    const title = values.title;
    const userId = userData?._id;
    const userName = userData?.name;
    const userEmail = userData?.email;

    if (!userData) {
      message.error("Please Login Before Comment");
    }

    const userRivew = {
      userId,
      userName,
      productName,
      userEmail,
      title,
      comment,
      rating,
    };

    const result = await addProductReview(userRivew).unwrap();

    if (result.success === true) {
      message.success(result?.message);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      <div
        className=" bg-white shadow p-5 rounded  mt-10 "
        style={{ border: "1px solid #D3D3D3" }}
      >
        <h4 className="mb-4">PRODUCT REVIEWS</h4>
        <p>
          <span className="mr-3">Product Name :</span> {productName}
        </p>

        <div className="flex w-[600px] justify-between mt-3 mb-3 text-sm">
          <span className="flex items-center ">
            Poor
            <Rate
              className="text-[14px] ml-2"
              count={1}
              disabled
              defaultValue={5}
            />
          </span>
          <span className="flex items-center ml-2">
            Average
            <Rate
              className="text-[14px] ml-2"
              count={2}
              disabled
              defaultValue={5}
            />
          </span>
          <span className="flex items-center ml-2">
            Good
            <Rate
              className="text-[14px] ml-2"
              count={3}
              disabled
              defaultValue={5}
            />
          </span>
          <span className="flex items-center ml-2">
            Very good
            <Rate
              className="text-[14px] ml-2"
              count={4}
              disabled
              defaultValue={5}
            />
          </span>
          <span className="flex items-center ml-2">
            Excellent
            <Rate
              className="text-[14px] ml-2"
              count={5}
              disabled
              defaultValue={5}
            />
          </span>
        </div>
        <Form submitHandler={onSubmit}>
          <div className="flex items-center mt-2">
            <p className=" mr-7">Review Title :</p>
            <div className="w-96">
              <FormInput
                name="title"
                type="text"
                size="middle"
                placeholder="Review Title"
              />
            </div>
          </div>

          <div className="flex items-center mt-2">
            <p className=" mr-7">Your Rating :</p>
            <div className="w-96">
              <div className="">
                <FormRateField defaultValue={5} name="rating" label="Rating" />
              </div>
            </div>
          </div>

          <div className="flex items-center mt-2">
            <p className=" mr-3">Your Message :</p>
            <div className="w-96">
              <div className="mb-2">
                <FormTextArea
                  name="comment"
                  placeholder="Enter Comment"
                  rows={3}
                />
              </div>
            </div>
          </div>

          <ColorButton
            className="mt-3 text-md font-bold"
            htmlType="submit"
            type="primary"
          >
            Send
          </ColorButton>
        </Form>
      </div>

      <div className="mt-5">
        <h4 className="">
          {reviewDatas ? (
            <span>Review({reviewDatas?.length})</span>
          ) : (
            <span>Reviews</span>
          )}
        </h4>
        <div className=" w-[90%] p-3 mt-2 flex flex-col items-center">
          {reviewDatas &&
            reviewDatas.map((review: IReview) => (
              <div
                className="bg-gray-100 w-full flex  p-3 m-2 rounded"
                key={review?.id}
              >
                <p className="text-4xl flex justify-center items-center font-bold bg-gray-200 rounded-full p-2 w-14 h-14">
                  <UserOutlined />
                </p>
                <div className="flex justify-between">
                  <div className="flex flex-col ml-8 mr-10">
                    <p className="mb-2">{review?.userName}</p>
                    <p>{review?.comment}</p>
                  </div>
                  <div className="">
                    <Rate disabled count={4} defaultValue={4} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
