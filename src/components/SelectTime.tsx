import { SelectProps } from "antd";

import { OPTIONS_TIME } from "@/constants";
import Select from "./ui/Select";

export default function SelectTime(props: SelectProps) {
  return <Select {...props} options={OPTIONS_TIME} />;
}
