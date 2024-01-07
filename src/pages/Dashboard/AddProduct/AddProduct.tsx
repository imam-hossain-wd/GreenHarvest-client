/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SubmitHandler } from "react-hook-form";
import Form from "../../../components/Forms/Form";
import FormInput from "../../../components/Forms/InputForm";
import { IProduct } from "../../../types/ProductTypes";
import FormSelectField from "../../../components/Forms/FormSelectField";
import {
  CategoryOptions,
  availabilityOptions,
  weightOptions,
} from "../../../constants/global";
import FormImageUploader from "../../../components/Forms/ImageUploader";
import FormTextArea from "../../../components/Forms/FormTextArea";
import ColorButton from "../../../components/button/Button";
import { useAddProductMutation } from "../../../redux/api/productApi";

const AddProduct = () => {
  const [addProduct] = useAddProductMutation();
  const onSubmit: SubmitHandler<IProduct> = async (data: IProduct) => {
    const {
      name,
      price,
      category,
      image,
      netWeight,
      availability,
      description,
    } = data;
    //@ts-ignore
    const file = image[0].originFileObj;
    const formData = new FormData();

    formData.append("image", file);
    try {
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_imageHostKey
      }`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          const productData = {
            name,
            price: Number(price),
            category,
            netWeight,
            availability,
            image: imgData.data.url,
            quantity: 1,
            description,
          };
          const result = addProduct(productData);
          console.log(result, "result");
        });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="w-[50%] mt-3 mx-auto bg-white shadow-lg p-5 rounded">
      <h1 className="mb-5 text-center"> Add Product</h1>

      <Form submitHandler={onSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 ">
          <div className="mb-3">
            <FormInput
              label="Product Name"
              name="name"
              type="text"
              size="large"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <FormInput
              name="price"
              type="text"
              size="large"
              label="Price"
              placeholder="Price"
            />
          </div>

          <div>
            <FormSelectField
              size="large"
              name="category"
              options={CategoryOptions}
              label="Category"
              placeholder="Select"
            />
          </div>

          <div>
            <FormSelectField
              size="large"
              name="netWeight"
              options={weightOptions}
              label="Net Weight"
              placeholder="Select"
            />
          </div>
          <div>
            <FormSelectField
              size="large"
              name="availability"
              //@ts-ignore
              options={availabilityOptions}
              label="Availability"
              placeholder="Select"
            />
          </div>
          <div>
            <FormTextArea
              name="description"
              label="Description"
              placeholder="Description"
            />
          </div>
          <div className="my-2">
            <FormImageUploader name="image" label="Upload Image" />
          </div>
        </div>

        <div className="flex justify-center items-center">
        <ColorButton
          htmlType="submit"
          children="Submit"
          className="w-48 mt-3 text-[17px] h-9"
        />
        </div>
      </Form>
    </div>
  );
};

export default AddProduct;
