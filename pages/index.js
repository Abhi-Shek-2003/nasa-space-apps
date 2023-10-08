import { Button } from "@mui/material";
import GETPROJECTSATYOURDOORSTEP from "../components/g-e-t-p-r-o-j-e-c-t-s-a-t-y-o-u-r-d-o-o-r-s-t-e-p";

const FLASH = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-sm text-black font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-lavender w-[1440px] h-[1024px] overflow-hidden">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image-2@2x.png"
        />
        <img
          className="absolute h-[37.03%] top-[29.12%] bottom-[33.84%] left-[calc(50%_-_131px)] max-h-full w-[261px] overflow-hidden"
          alt=""
          src="/undraw-shopping-app-flsj-1.svg"
        />
        <div className="absolute h-[9.38%] top-[74.75%] left-[calc(50%_-_147px)] font-medium inline-block w-[293px]">
          The app to make your open science project famous and help you to
          collaborate with other scientists.
        </div>
        <GETPROJECTSATYOURDOORSTEP />
        <Button
          className="absolute top-[861px] left-[calc(50%_-_104px)]"
          sx={{ width: 208 }}
          color="primary"
          variant="contained"
          href="/r-e-g-i-s-t-e-r"
        >
          Get started
        </Button>
        <img
          className="absolute h-[22.09%] top-[5.22%] bottom-[72.69%] left-[calc(50%_-_181px)] rounded-6xl max-h-full w-[362px] object-cover hover:animate-[1s_ease_0s_infinite_normal_none_jello-horizontal] hover:opacity-[1]"
          alt=""
          src="/image-3@2x.png"
        />
      </div>
    </div>
  );
};

export default FLASH;
