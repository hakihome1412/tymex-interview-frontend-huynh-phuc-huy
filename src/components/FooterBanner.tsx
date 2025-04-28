import characterImg from "@/assets/character.png";
import useProductsBanner from "@/hooks/useProductsBanner";
import { Skeleton } from "antd";

export default function FooterBanner() {
  const { data: productsBanner, isLoading: loadingProductsBanner } =
    useProductsBanner();

  return (
    <div className="bg-footer-banner h-[300px] w-full content-above-mask absolute bottom-0 left-0 px-20">
      <div className="flex">
        <div className="w-[65%]">
          <div className="flex items-center justify-between mt-[100px]">
            {loadingProductsBanner
              ? Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton.Image
                    style={{
                      width: 200,
                      height: 120,
                    }}
                    active={true}
                    key={index}
                  />
                ))
              : productsBanner?.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col items-center justify-center w-[200px]"
                  >
                    <div className="flex items-center justify-center bg-banner-product w-full h-[120px] shadow-[-12px_12px_0px_0px_#101010] border border-yellow-400">
                      <img
                        src={`/src/assets/products/${product.title}.png`}
                        alt={product.title}
                        className="max-w-[200px] max-h-[168px] -mt-[52px]"
                      />
                    </div>

                    <span className="uppercase text-lg font-bold mt-6">
                      {product.title}
                    </span>
                  </div>
                ))}
          </div>
        </div>
        <div className="relative w-[35%] flex justify-center items-center">
          <img src={characterImg} alt="character" className="-mt-[355px]" />

          <div className="flex justify-center items-center bg-paint-streak bg-no-repeat bg-center w-[100%] h-[156px] absolute bottom-4 left-10">
            <span className="font-bold text-[72px] text-white mr-16">THE DJ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
