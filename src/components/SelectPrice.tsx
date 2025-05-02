import { SelectProps } from "antd";

import { OPTIONS_PRICE } from "@/constants";
import Select from "./ui/Select";

export default function SelectPrice(props: SelectProps) {
  return <Select {...props} options={OPTIONS_PRICE} />;
}
