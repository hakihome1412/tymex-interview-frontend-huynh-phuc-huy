import { Link } from "react-router";
import { Divider } from "antd";

import { NAVIGATIONS } from "@/constants";
import HandsetIcon from "../icons/HandsetIcon";
import CommentIcon from "../icons/CommentIcon";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <div
      className="bg-[#17161A] py-10 px-20 content-above-mask"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex">
        <div className="w-1/3">
          <p className="font-drone uppercase text-white font-bold text-xl">
            Navigation
          </p>

          <div className="grid grid-cols-3 mt-6 gap-2">
            {NAVIGATIONS.map((navigation) => (
              <Link
                key={navigation.label}
                to={navigation.path}
                className="!w-fit !text-white !transition !duration-300 hover:opacity-70"
              >
                {navigation.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <p className="font-drone uppercase text-white font-bold text-xl mr-14">
            Contact us
          </p>

          <div className="flex flex-col mt-6 gap-6">
            <div className="flex items-center gap-4">
              <HandsetIcon />

              <a href="tel:01234568910" className="!text-white">
                01234568910
              </a>
            </div>

            <div className="flex items-center gap-4">
              <CommentIcon />

              <a href="mailto:tymex-talent@tyme.com" className="!text-white">
                tymex-talent@tyme.com
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <p className="font-drone uppercase text-white font-bold text-xl">
            Subcribe to receive our latest update
          </p>

          <div className="flex mt-6 gap-4">
            <Input placeholder="Your email address" />

            <Button
              buttonType="primary"
              size="medium"
              className="w-fit"
              isHighlight
            >
              Subcribe
            </Button>
          </div>
        </div>
      </div>

      <Divider className="bg-[#3A3841] !mt-20 !mb-10" />

      <div className="text-white flex items-center justify-between gap-4">
        <p>©2023 Tyme - Edit. All Rights reserved.</p>

        <div className="w-1/3 flex items-center gap-20 justify-end">
          <Link className="!text-white" to="/security">
            Security
          </Link>
          <Link className="!text-white" to="/legal">
            Legal
          </Link>
          <Link className="!text-white" to="/privacy">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
}
