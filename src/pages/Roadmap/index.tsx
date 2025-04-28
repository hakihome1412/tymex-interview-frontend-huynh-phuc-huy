import { Result } from "antd";

export default function Roadmap() {
  return (
    <Result
      status="403"
      title={<h1 className="text-white">403</h1>}
      subTitle={
        <p className="text-white">
          Sorry, you are not authorized to access this page.
        </p>
      }
    />
  );
}
