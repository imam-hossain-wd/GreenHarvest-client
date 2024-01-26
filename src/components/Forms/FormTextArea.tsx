import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
};

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder,
}: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className={`flex flex-col  w-full`}>
      <span className="mb-2">{label ? label : null}</span>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            className="hover:border-primary h-28 focus:border-primary"
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;