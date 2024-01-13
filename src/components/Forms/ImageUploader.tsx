/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button, Upload } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import { UploadOutlined } from "@ant-design/icons";


type FormImageUploaderProps = {
  name: string;
  label?: string;
};

const FormImageUploader: React.FC<FormImageUploaderProps> = ({
  name,
  label,
}) => {
  const buttonIcon = <UploadOutlined />;
  const buttonText = `Upload Image`;
  const { control } = useFormContext();

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
      {label && <label className="mb-4">{label}</label>} <br />
      <Controller
        name={name}
        control={control}
        //@ts-ignore
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Upload
            name="files"
            listType="picture"
            beforeUpload={() => false}
            onChange={(e) => onChange(normFile(e))}
            fileList={value}
          >
            <Button className="w-80 text-lg h-9 mt-2">
              {buttonIcon}
              <span style={{ marginLeft: "8px" }}>{buttonText}</span>
            </Button>
          </Upload>
        )}
      />
    </>
  );
};

export default FormImageUploader;
