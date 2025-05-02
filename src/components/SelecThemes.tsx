import { SelectProps } from "antd";

import { OPTIONS_THEME } from "@/constants";
import Select from "./ui/Select";

export default function SelecThemes(props: SelectProps) {
  return <Select {...props} options={OPTIONS_THEME} />;
}
