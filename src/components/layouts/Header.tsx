import { cn } from "@/utils";
import { Link, useLocation } from "react-router";
import Button from "../ui/Button";
import SelectLanguage from "../SelectLanguage";

const NAVIGATIONS_HEADER = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "About Us",
    path: "/about-us",
  },

  {
    label: "Our Teams",
    path: "/our-teams",
  },

  {
    label: "Marketplace",
    path: "/marketplace",
  },

  {
    label: "Roadmap",
    path: "/roadmap",
  },

  {
    label: "Whitepaper",
    path: "/whitepaper",
  },
];

export default function Header() {
  const path = useLocation();

  return (
    <div
      className="h-[84px] bg-[#17161AB2] !sticky top-0 left-0 w-full z-10 py-4 px-20 3xl:px-[200px]"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="w-full h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-10">
            {NAVIGATIONS_HEADER.map((navigation) => (
              <Link
                key={navigation.path}
                to={navigation.path}
                className={cn(
                  "!text-white font-drone !text-sm !transition !duration-300 hover:opacity-70",
                  path.pathname === navigation.path && "text-bg-primary"
                )}
              >
                {navigation.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              buttonType="primary"
              size="medium"
              className="w-fit"
              isHighlight
            >
              Connect Wallet
            </Button>

            <SelectLanguage />
          </div>
        </div>
      </div>
    </div>
  );
}
