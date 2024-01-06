/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from "../../components/Forms/Form";
import { getUserInfo } from "../../utils/auth.Services";
import FormRateField from "../../components/Forms/Rate";
import FormTextArea from "../../components/Forms/FormTextArea";
import { useGetSingleUserQuery } from "../../redux/api/userApi";
import Loading from "../Shared/loading/Loading";
import ColorButton from "../../components/button/ColorButton";

const Review = () => {

  const user: any = getUserInfo();
  console.log(user, 'userinfo');

  const {data, isLoading}= useGetSingleUserQuery(user._id)

  if(isLoading){
   return <Loading />
  }

  console.log(data?.data, 'user data');

  const userData = data?.data;
  const { _id, email, name} = userData;



  const onSubmit = async (values: any) => {
    // console.log(values);
    const comment =  values.comment;
    const rating = values.rating;

    const userRivew = {
        userId: _id,
        name,
        email,
        comment,
        rating
    }

    console.log(userRivew, 'userRivew');
   
  };

 

  return (
    <div className="">
      <div className=" w-[400px] bg-white shadow-2xl p-5 rounded h-60 mt-10 ">
        <Form submitHandler={onSubmit}>
          <div className="mb-2">
            <FormTextArea name="comment" placeholder="Enter Comment" rows={3} />
          </div>
          <div className="">
            <FormRateField name="rating" label="Rating" />
          </div>
          <ColorButton className="mt-3 text-md font-bold" htmlType="submit" type="primary">
            Comment
          </ColorButton>
        </Form>
      </div>

      <div className="-mt-8">
        <h4 className="">
          {/* {data ? <span>Review({data?.length})</span> : <span>Reviews</span>} */}
        </h4>
        {/* <div className=" w-[90%] p-3 mt-2 flex flex-col items-center">
            {data &&
              data.map((review: IReview) => (
                <div
                  className="bg-gray-100 p-2 w-full flex  p-3 m-2 rounded"
                  key={review?.id}
                >
                  {review?.user?.userImage ? (
                    <Image
                      src={review?.user?.userImage}
                      alt="review"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <p className="text-4xl flex justify-center items-center font-bold bg-gray-200 rounded-full p-2 w-14 h-14">
                      <UserOutlined />
                    </p>
                  )}
                 
                 <div className="flex justify-between">
                 <div className="flex flex-col ml-8 mr-10">
                    <p className="mb-2">
                      {review?.user?.firstName} {review?.user?.lastName}
                    </p>
                    <p>{review?.comment}</p>
                  </div>
                  <div className="">
                    <Rate disabled defaultValue={review?.rating} />
                  </div>
                 </div>
  
                </div>
              ))}
          </div> */}
      </div>
    </div>
  );
};

export default Review;
