import { Skeleton } from "antd";

import newArrivalImg from "@/assets/new-arrival.png";
import characterImg from "@/assets/character.png";
import useProductsBanner from "@/hooks/useProductsBanner";

export default function Banner() {
  const { data: productsBanner, isLoading: loadingProductsBanner } =
    useProductsBanner();

  return (
    <div className="relative h-[calc(100vh-84px)] flex flex-col justify-between overflow-hidden">
      <div className="flex gap-4 content-above-mask px-20">
        <div className="h-full w-[65%] flex justify-center items-center">
          <img
            src={newArrivalImg}
            alt="banner"
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-duration="500"
            className="object-cover"
          />
        </div>

        <div
          className="relative w-[35%] flex justify-center items-center"
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-duration="500"
        >
          <img
            src={characterImg}
            alt="character"
            className="w-full h-full max-w-[600px] object-contain -mb-20"
            style={{ aspectRatio: "1/1.4" }}
          />

          <div className="flex justify-center items-center bg-paint-streak bg-contain bg-no-repeat bg-center w-full h-[156px] absolute left-10 bottom-0">
            <span className="font-drone font-bold text-[72px] text-white mr-16 mt-4">
              THE DJ
            </span>
          </div>
        </div>
      </div>

      <div className="min-h-[calc((100vh-84px)/3)] bg-footer-banner bg-cover bg-no-repeat bg-bottom content-above-mask flex items-center px-20">
        <div className="flex relative w-full 2xl:mt-[160px] 3xl:mt-20">
          <div
            className="relative w-full flex flex-wrap items-center justify-center"
            data-aos="zoom-in"
          >
            {loadingProductsBanner
              ? Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton.Image
                    style={{
                      height: 120,
                      marginLeft: 16,
                      width: "calc((100vw - 400px)/6)",
                    }}
                    active={true}
                    key={index}
                  />
                ))
              : productsBanner?.map((product) => (
                  <div
                    key={product.id}
                    className="w-[calc(100%/6)] p-4 flex flex-col items-center justify-center cursor-pointer group"
                  >
                    <div className="relative flex items-center justify-center bg-banner-product w-full h-[120px] shadow-[-12px_12px_0px_0px_#101010] border border-yellow-400">
                      <img
                        src={`/products/${product.title}.png`}
                        alt={product.title}
                        className="absolute bottom-0 max-w-[80%] object-contain transition-all duration-300 group-hover:scale-110"
                        style={{
                          aspectRatio: "1/1",
                        }}
                      />
                    </div>

                    <span className="uppercase font-drone font-bold mt-6 text-sm xl:text-lg">
                      {product.title}
                    </span>
                  </div>
                ))}
          </div>
        </div>
      </div>

      {/* Background banner */}
      <div className="bg-banner bg-cover absolute top-0 left-0 w-full h-full" />

      {/* Background mask */}
      <div className="bg-black/70 absolute top-0 left-0 w-full h-full" />
    </div>
  );
}
