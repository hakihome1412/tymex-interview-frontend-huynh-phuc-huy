import { Menu, Popover } from "antd";
import { DownOutlined, GlobalOutlined } from "@ant-design/icons";
const LANGUAGE_OPTIONS = [
  {
    key: "vi",
    label: <span className="flex items-center gap-2">🇻🇳 Việt Nam</span>,
  },
  {
    key: "en",
    label: <span className="flex items-center gap-2">🇺🇸 English</span>,
  },
];

export default function SelectLanguage() {
  return (
    <Popover
      placement="bottom"
      content={
        <Menu
          defaultSelectedKeys={["en"]}
          mode="vertical"
          items={LANGUAGE_OPTIONS}
        />
      }
      arrow={false}
    >
      <div className="flex items-center gap-2">
        <GlobalOutlined className="!text-white" />

        <DownOutlined className="!text-white" />
      </div>
    </Popover>
  );
}
