import { Select as SelectAntd, SelectProps } from "antd";

import { cn } from "@/utils";

export default function Select(props: SelectProps) {
  const { className, ...rest } = props;

  return <SelectAntd className={cn("select-project", className)} {...rest} />;
}
