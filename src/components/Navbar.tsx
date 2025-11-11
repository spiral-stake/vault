import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <>
      <div className="w-full px-4 lg:px-[64px] py-[16px] inline-flex justify-start items-center gap-3">
        <div className="flex w-full justify-between items-center">
          <div className="lg:w-[800px] flex items-center justify-start lg:justify-between">
            {/* logo part */}
            <div className="flex justify-start items-center gap-3">
              <div>
                <div className="flex items-center justify-center gap-[8px]">
                  <img src={logo} alt="" className="h-[30px] w-[30px]" />
                  <span className="hidden md:inline-flex text-[20px] font-[700] text-white">
                    Spiral Stake
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
