import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="w-full px-4 lg:px-[64px] py-[16px] inline-flex justify-start items-center gap-3">
        <div className="flex w-full justify-between items-center">
          <div className="lg:w-[800px] flex items-center justify-start lg:justify-between">
            {/* logo part */}
            <div className="flex justify-start items-center gap-3">

              <div className="cursor-pointer flex items-center justify-center gap-1">
                <img src={logo} alt="" className="h-9 w-9" />
                <span className="hidden md:inline-flex text-xl font-medium">
                  Spiral Stake
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
