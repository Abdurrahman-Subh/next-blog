import { useState } from "react";
import cn from "@/utils/helpers/cn";
import useI18n from "@/utils/hooks/use18n";
const Input = ({
  type = "text",
  name,
  id,
  className,
  placeholder,
  password,
  register = null,
  error = null,
  validation = {},
  ...props
}) => {
  const [value, setValue] = useState("");
  const i18n = useI18n();
  const formData = () => {
    if (typeof register === "function") {
      return {
        ...register(name, validation),
        ...props,
      };
    }
    return props;
  };
  return (
    <div className="relative">
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          {
            "border-red-500": error && error?.message,
            "focus:border-red-500": error && error?.message,
            "hover:border-red-500": error && error?.message,
          },
          className
        )}
        id={id}
        placeholder={placeholder}
        name={name}
        defaultValue={value}
        onChange={(e) => setValue(e.target.value)}
        {...formData()}
      />
      {error && error?.message && (
        <span className="text-xs text-red-500">{error.message}</span>
      )}
    </div>
  );
};

export default Input;
