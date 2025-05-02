import { Result } from "antd";

export default function Legal() {
  return (
    <Result
      className="relative z-10"
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
