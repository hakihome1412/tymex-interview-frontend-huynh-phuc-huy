import { Input as InputAntd, InputProps } from "antd";
import { cn } from "@/utils";

export default function Input(props: InputProps) {
  const { className, ...rest } = props;

  return (
    <InputAntd
      className={cn(
        "input-project !border !border-[#89888B] !rounded-sm !text-white !bg-transparent !h-[44px]",
        className
      )}
      {...rest}
    />
  );
}
