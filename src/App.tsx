import Navbar from "./components/Navbar";
import instant from "./assets/icons/instant.svg";
import rocket from "./assets/icons/rocket.svg";
import highYeild from "./assets/icons/highYield.svg";
import vault from "./assets/vaultfinal.png";
import Links from "./components/low-level/Links";

function App() {
  return (
    <div className="text-white relative overflow-hidden w-full bg-[#051030] [background-image:radial-gradient(circle_700px_at_-5%_10%,#0344ab_15%,#051030_70%,transparent_100%),radial-gradient(700px_circle_at_105%_90%,#0344ab_20%,#051030_70%,transparent_70%)]">
      <Navbar />
      <main className="">
        <div className="pt-[112px] flex flex-col items-center gap-[24px]">
          <div className="flex flex-col items-center gap-[12px]">
            <div className="w-fit text-[14px] font-[400] px-[8px] py-[5px] bg-white bg-opacity-[12%] rounded-[999px]">
              Coming soon
            </div>
            <div className="flex flex-col items-center gap-[12px]">
              <p className="text-[56px] font-[700]">Spiral Vaults</p>
              <p className="text-[16px] font-[400] text-[#B3B3B3]">
                Our system helps you leverage safely and instantly, so you earn
                more.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[24px] ">
            <div className="flex items-center gap-[4px] rounded-[32px] px-[16px] py-[8px] bg-white bg-opacity-[6%]">
              <img src={instant} alt="" className="w-[14px]"/>
              <p className="text-[16px] font-[400]">Instant</p>
            </div>
            <div className="flex items-center gap-[4px] rounded-[32px] px-[16px] py-[8px] bg-white bg-opacity-[6%]">
              <img src={rocket} alt="" className="w-[14px]"/>
              <p className="text-[16px] font-[400]">Fast</p>
            </div>
            <div className="flex items-center gap-[4px] rounded-[32px] px-[16px] py-[8px] bg-white bg-opacity-[6%]">
              <img src={highYeild} alt="" className="w-[14px]"/>
              <p className="text-[16px] font-[400]">High yield</p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <img src={vault} alt="" className="w-[648px] h-[648px]" />
        </div>
        <Links/>
      </main>
    </div>
  );
}

export default App;
