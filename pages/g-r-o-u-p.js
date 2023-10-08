import { Button } from "@mui/material";
import Link from "next/link";
import GroupComponent5 from "../components/group-component5";

const GROUP = () => {
  return (
    <div className="relative bg-white w-full h-[1393px] overflow-hidden text-left text-11xl text-white font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[1393px] overflow-hidden">
        <img
          className="absolute h-[100.22%] top-[0%] bottom-[-0.22%] left-[calc(50%_-_720px)] max-h-full w-[1440px] object-cover"
          alt=""
          src="/image-21@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[171px]"
          alt=""
          src="/group-2.svg"
        />
        <div className="absolute top-[171px] left-[0px] bg-darkseagreen w-[1440px] h-[115px] mix-blend-color-burn" />
        <b className="absolute top-[228px] left-[120px] inline-block w-[724px] h-6">
          YOUR GROUPS..
        </b>
        <div className="absolute top-[286px] left-[0px] bg-dimgray-200 w-[313px] h-[997px]" />
        <div className="absolute top-[309px] left-[0px] bg-gray-400 w-[313px] h-[137px]" />
        <b className="absolute top-[343px] left-[77px] inline-block w-52 h-[58px]">
          GROUP1
        </b>
        <div className="absolute top-[446px] left-[0px] bg-dimgray-100 w-[313px] h-[118px]" />
        <b className="absolute top-[483px] left-[77px] inline-block w-52 h-[58px]">
          GROUP2
        </b>
        <div className="absolute top-[572px] left-[0px] bg-dimgray-100 w-[313px] h-[118px]" />
        <b className="absolute top-[632px] left-[77px] inline-block w-52 h-[58px]">
          GROUP3
        </b>
        <div className="absolute top-[309px] left-[313px] bg-gray-400 w-[1109px] h-[958px]" />
        <div className="absolute top-[398px] left-[335px] rounded-26xl bg-indianred w-[732px] h-[85px]" />
        <b className="absolute top-[346px] left-[403px] inline-block w-[214px] h-[55px]">
          MEMBER 1
        </b>
        <div className="absolute top-[604px] left-[335px] rounded-26xl bg-indianred w-[732px] h-[85px]" />
        <b className="absolute top-[558px] left-[403px] inline-block w-[214px] h-[27px]">
          MEMBER 2
        </b>
        <div className="absolute top-[864px] left-[679px] rounded-26xl bg-green w-[732px] h-[85px]" />
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[810px] left-[1257px] font-bold text-[inherit] inline-block w-[127px] h-8"
          href="/y-o-u"
        >
          YOU
        </Link>
        <Button
          className="absolute top-[862px] left-[69px]"
          sx={{ width: 175 }}
          color="primary"
          variant="contained"
        >
          create
        </Button>
        <div className="absolute top-[1152px] left-[363px] rounded-36xl bg-gainsboro-200 w-[790px] h-[90px]" />
        <img
          className="absolute h-[3.59%] w-[4.86%] top-[84.13%] right-[68.4%] bottom-[12.28%] left-[26.74%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector23.svg"
        />
        <div className="absolute top-[1147px] left-[1180px] rounded-[50%] bg-forestgreen w-24 h-[95px]" />
        <img
          className="absolute h-[3.59%] w-[3.4%] top-[83.99%] right-[13.06%] bottom-[12.42%] left-[83.54%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector24.svg"
        />
        <input
          className="absolute top-[1158px] left-[924px] bg-gainsboro-200 w-[77px] h-[78px]"
          type="file"
        />
        <img
          className="absolute h-[3.23%] w-[3.13%] top-[84.57%] right-[24.44%] bottom-[12.2%] left-[72.43%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector25.svg"
        />
        <img
          className="absolute h-[3.16%] w-[3.75%] top-[84.64%] right-[31.25%] bottom-[12.2%] left-[65%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/clip.svg"
        />
        <Button
          className="absolute top-[1025px] left-[94px]"
          sx={{ width: 121 }}
          color="secondary"
          variant="contained"
        >
          Join
        </Button>
      </div>
      <GroupComponent5
        imageDimensions="/vector.svg"
        imageDimensionsText="/vector1.svg"
        imageDimensionsText2="/vector2.svg"
        imageDimensionsText3="/vector3.svg"
        yOUTop="92.25%"
        yOULeft="0%"
        yOUWidth="100%"
        yOUHeight="7.75%"
        yOURight="0%"
        yOUBottom="0%"
        propCursor="pointer"
        propTextDecoration="none"
        propCursor1="unset"
      />
    </div>
  );
};

export default GROUP;
