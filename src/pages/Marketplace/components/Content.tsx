import { Skeleton, Form, Slider, Tooltip } from "antd";
import debounce from "lodash/debounce";
import { Dispatch, SetStateAction, useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";

import {
  CATEGORY_DEFAULT,
  LIMIT_DEFAULT,
  OPTIONS_PRICE,
  OPTIONS_THEME,
  OPTIONS_TIERS,
  OPTIONS_TIME,
} from "@/constants";
import Input from "@/components/ui/Input";
import SearchIcon from "@/components/icons/SearchIcon";
import SelectTime from "@/components/SelectTime";
import SelectTiers from "@/components/SelectTiers";
import SelectPrice from "@/components/SelectPrice";
import SelecThemes from "@/components/SelecThemes";
import { cn, getBackgroundColorByTheme } from "@/utils";
import { Author, Category, Product, ProductTheme } from "@/types";
import FavoriteIcon from "@/components/icons/FavoriteIcon";
import EtherumIcon from "@/components/icons/EtherumIcon";
import OnlineIcon from "@/components/icons/OnlineIcon";
import Button from "@/components/ui/Button";

type FormValues = {
  search: string;
  category: string;
  price: [number, number];
  tier: string;
  theme: string;
  time: string;
  price_type: string;
};

type ContentProps = {
  categories: Category[];
  products: Product[];
  authors: Author[];
  isFetchingCategories: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
  setFilters: Dispatch<SetStateAction<Partial<FormValues>>>;
};
export default function Content({
  categories,
  products,
  authors,
  isFetchingCategories,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
  setFilters,
}: ContentProps) {
  const [form] = Form.useForm<FormValues>();
  const selectedCategory = Form.useWatch("category", form);
  const initialValues = {
    search: "",
    category: CATEGORY_DEFAULT.name,
    price: [0, 200] as [number, number],
    tier: OPTIONS_TIERS[0].value,
    theme: OPTIONS_THEME[0].value,
    time: OPTIONS_TIME[0].value,
    price_type: OPTIONS_PRICE[0].value,
  };

  // Update filters when form is submitted
  const handleFinish = (values: FormValues) => {
    setFilters({
      ...values,
      price: values.price as [number, number],
    });
  };

  // Create debounced search function
  const debouncedSearch = debounce((value: string) => {
    setFilters((prev) => ({ ...prev, search: value }));
  }, 500);

  // Reset filters to initial values
  const handleResetFilters = () => {
    form.resetFields();
    setFilters(initialValues);
  };

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <Form
      initialValues={initialValues}
      form={form}
      layout="vertical"
      onFinish={handleFinish}
    >
      <Form.Item name="category" hidden />

      <div className="mt-20">
        <div className="relative flex gap-12 px-20">
          <div
            className="w-[25%]"
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <Form.Item name="search">
              <Input
                prefix={<SearchIcon />}
                placeholder="Quick search"
                onChange={(e) => {
                  const value = e.target.value;
                  form.setFieldValue("search", value);
                  debouncedSearch(value);
                }}
              />
            </Form.Item>

            <Form.Item label="PRICE" name="price" className="!mt-12">
              <Slider
                className="slider-project"
                styles={{
                  rail: {
                    backgroundColor: "#3A3841",
                    height: 8,
                    borderRadius: 2,
                  },
                  track: {
                    height: 8,
                    background:
                      "linear-gradient(91.27deg, rgba(218, 69, 143, 0) 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, rgba(218, 52, 221, 0) 102.8%)",
                  },
                }}
                range
                min={0.01}
                max={200}
              />
            </Form.Item>

            <Form.Item label="TIER" name="tier">
              <SelectTiers allowClear />
            </Form.Item>

            <Form.Item label="THEME" name="theme">
              <SelecThemes allowClear />
            </Form.Item>

            <Form.Item label="TIME" name="time">
              <SelectTime />
            </Form.Item>

            <Form.Item label="PRICE" name="price_type">
              <SelectPrice />
            </Form.Item>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleResetFilters}
              >
                <div className="w-4 h-4 flex justify-center items-center rounded-full bg-[#FBC625]">
                  <CloseOutlined className="text-white text-[8px] font-bold" />
                </div>

                <span className="text-white text-sm font-bold whitespace-nowrap">
                  Reset filter
                </span>
              </button>
              <Button
                buttonType="primary"
                size="medium"
                type="submit"
                className="w-[168px]"
                isHighlight
              >
                Search
              </Button>
            </div>
          </div>

          <div
            className="relative w-[75%] flex flex-col gap-6 overflow-hidden"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <div className="flex items-center gap-6 overflow-x-scroll scrollbar-hide">
              {isFetchingCategories ? (
                Array.from({ length: LIMIT_DEFAULT }).map((_, index) => (
                  <Skeleton.Button
                    style={{
                      width: 160,
                      height: 44,
                      backgroundColor: "#2b2b2b9e",
                    }}
                    active={true}
                    key={index}
                  />
                ))
              ) : (
                <>
                  <Button
                    buttonType="primary"
                    size="medium"
                    isFit
                    className={
                      selectedCategory === CATEGORY_DEFAULT.name
                        ? "from-[#DA458F] to-[#DA34DD]"
                        : ""
                    }
                    onClick={() => {
                      form.setFieldValue("category", CATEGORY_DEFAULT.name);
                      setFilters((prev) => ({
                        ...prev,
                        category: CATEGORY_DEFAULT.name,
                      }));
                    }}
                  >
                    <span className="whitespace-nowrap">
                      {CATEGORY_DEFAULT.name}
                    </span>
                  </Button>

                  {categories.map((category) => (
                    <Button
                      buttonType="primary"
                      size="medium"
                      isFit
                      className={
                        selectedCategory === category.name
                          ? "from-[#DA458F] to-[#DA34DD]"
                          : ""
                      }
                      key={category.id}
                      onClick={() => {
                        form.setFieldValue("category", category.name);
                        setFilters((prev) => ({
                          ...prev,
                          category: category.name,
                        }));
                      }}
                    >
                      <span className="whitespace-nowrap">{category.name}</span>
                    </Button>
                  ))}
                </>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
              {products?.length === 0
                ? Array.from({ length: LIMIT_DEFAULT }).map((_, index) => (
                    <Skeleton.Image
                      style={{
                        width: "100%",
                        height: 320,
                        backgroundColor: "#2b2b2b9e",
                      }}
                      active={true}
                      key={index}
                    />
                  ))
                : products.map((product) => {
                    const productImg = `/products/${product.title}.png`;
                    const author = authors?.find(
                      (author) => author.id === product.authorId
                    );

                    return (
                      <div
                        key={product.id}
                        className="flex flex-col cursor-pointer gap-4 w-full h-full bg-[#3A384199] text-white rounded-[10px] p-2 group transition duration-300 hover:bg-[#3A3841]"
                      >
                        <div
                          className={cn(
                            "relative aspect-square w-full bg-gray-800 rounded-sm overflow-hidden",
                            getBackgroundColorByTheme(
                              product.theme as ProductTheme
                            )
                          )}
                        >
                          <img
                            className="max-w-[280px] max-h-[240px] absolute -bottom-1 left-1/2 translate-x-[-50%] transition duration-300 group-hover:scale-120"
                            src={productImg}
                            alt={product.title}
                            onError={(e) => {
                              e.currentTarget.src =
                                "/products/No Image Available.png";
                            }}
                          />

                          <div className="absolute top-1 left-0 flex justify-between items-center w-full py-1 px-2">
                            <div className="bg-[#313B4580] flex items-center justify-center rounded-sm py-1 px-3 text-xs">
                              {product.category}
                            </div>

                            <FavoriteIcon
                              className="cursor-pointer transition duration-300 hover:opacity-80 group-hover:scale-120"
                              color={product.isFavorite ? "white" : "#313B4580"}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold whitespace-nowrap">
                            {product.title}
                          </span>

                          <div className="flex items-center gap-1 whitespace-nowrap">
                            <EtherumIcon />

                            <span className="text-sm">{product.price} ETH</span>
                          </div>
                        </div>

                        <div className="relative flex items-center gap-2">
                          <div className="size-8 rounded-full overflow-hidden bg-white">
                            <img
                              src={author?.avatar}
                              alt={author?.firstName}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <Tooltip
                            title={
                              <span className="capitalize">
                                {author?.onlineStatus}
                              </span>
                            }
                          >
                            <div className="size-3 rounded-full bg-[#17161A] flex items-center justify-center absolute bottom-0 left-5 z-10">
                              <OnlineIcon
                                onlineStatus={author?.onlineStatus || "online"}
                              />
                            </div>
                          </Tooltip>

                          <span className="text-sm">{`${author?.firstName} ${author?.lastName}`}</span>
                        </div>
                      </div>
                    );
                  })}
            </div>

            {hasNextPage && (
              <div className="flex justify-center items-center">
                <Button
                  buttonType="primary"
                  size="large"
                  className="w-1/4"
                  onClick={() => fetchNextPage()}
                >
                  {isFetchingNextPage ? "Loading..." : "View more"}
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="bg-footer-content bg-cover bg-no-repeat h-[322px] w-full mt-[200px]" />
      </div>
    </Form>
  );
}
