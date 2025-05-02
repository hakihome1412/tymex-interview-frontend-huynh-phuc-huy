import { SelectProps } from "antd";

import { OPTIONS_TIERS } from "@/constants";
import Select from "./ui/Select";

export default function SelectTiers(props: SelectProps) {
  return <Select {...props} options={OPTIONS_TIERS} />;
}
