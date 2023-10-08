import { Button } from "@mui/material";
import GroupIcon from "../components/group-icon";
import GroupComponent5 from "../components/group-component5";

const MENU = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-3xl text-white font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[1024px] overflow-hidden">
        <img
          className="absolute h-[100.29%] top-[0%] bottom-[-0.29%] left-[calc(50%_-_720px)] max-h-full w-[1440px] object-cover"
          alt=""
          src="/image-25@2x.png"
        />
        <b className="absolute top-[183px] left-[64px] text-11xl">MENU..</b>
        <div className="absolute top-[171px] left-[0px] bg-darkseagreen w-[1440px] h-[115px] mix-blend-color-burn" />
        <b className="absolute top-[228px] left-[129px] text-6xl inline-block w-[101px] h-[30px]">
          Hello,
        </b>
        <Button
          className="absolute top-[258px] left-[64px] mix-blend-luminosity"
          sx={{ width: 329 }}
          color="primary"
          variant="contained"
          href="/c-a-r-t"
        >
          Your orders
        </Button>
        <Button
          className="absolute top-[256px] left-[679px] mix-blend-luminosity"
          sx={{ width: 370 }}
          color="primary"
          variant="contained"
          href="/l-i-s-t"
        >
          Lists❤.
        </Button>
        <a className="[text-decoration:none] absolute top-[626px] left-[0px] rounded-6xl bg-gainsboro-200 w-[1440px] h-[51px] mix-blend-difference" />
        <a className="[text-decoration:none] absolute top-[548px] left-[0px] rounded-6xl bg-gainsboro-200 w-[1440px] h-[51px] mix-blend-difference" />
        <b className="absolute top-[557px] left-[33px]">settings⚙</b>
        <b className="absolute top-[635px] left-[30px] inline-block w-[244px] h-[25px]">
          customer care
        </b>
        <GroupIcon />
        <GroupComponent5
          imageDimensions="/vector14.svg"
          imageDimensionsText="/vector15.svg"
          imageDimensionsText2="/vector16.svg"
          imageDimensionsText3="/vector17.svg"
          imageDimensionsText4="/y-o-u"
          yOUTop="90.43%"
          yOULeft="0%"
          yOUWidth="100%"
          yOUHeight="9.57%"
          yOURight="0%"
          yOUBottom="0%"
          propCursor="pointer"
          propTextDecoration="none"
          propCursor1="pointer"
        />
      </div>
    </div>
  );
};

export default MENU;
