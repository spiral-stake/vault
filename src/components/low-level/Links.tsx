import X from "../../assets/icons/X.svg";
import telegram from "../../assets/icons/telegram.svg";

const Links = () => {
  return (
    <div className="fixed bottom-[64px] right-[64px] flex items-center gap-[16px]">
      <div className="p-[4px] rounded-[6px] bg-white bg-opacity-[5%]">
        <img src={X} alt="" className="w-[24px]" />
      </div>
      <div className="p-[4px] rounded-[6px] bg-white bg-opacity-[5%]">
        <img src={telegram} alt="" className="w-[24px]" />
      </div>
    </div>
  );
};

export default Links;
