import newArrivalImg from "@/assets/new-arrival.png";
import FooterBanner from "@/components/FooterBanner";

export default function Marketplace() {
  return (
    <div>
      {/* Header */}
      <div className="relative h-[804px]">
        {/* Header content */}
        <div className="relative flex h-[calc(100%-300px)] content-above-mask px-20">
          <div className="w-[65%] h-full flex justify-center items-center">
            <img src={newArrivalImg} alt="banner" />
          </div>
        </div>

        {/* Footer banner */}
        <FooterBanner />

        {/* Background banner */}
        <div className="bg-banner bg-cover absolute top-0 left-0 w-full h-[calc(100%-280px)]" />

        {/* Background mask */}
        <div className="bg-black/70 absolute top-0 left-0 w-full h-full" />
      </div>

      {/* Content */}
      <div className="flex">
        <div className="w-[25%]">aaaa</div>
        <div className="w-[75%]">bbbb</div>
      </div>
    </div>
  );
}
