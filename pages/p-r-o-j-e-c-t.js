import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import GroupComponent5 from "../components/group-component5";

const PROJECT = () => {
  return (
    <div className="relative bg-white w-full h-[1393px] overflow-hidden text-left text-3xl text-white font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[1393px] overflow-hidden">
        <img
          className="absolute h-[100.22%] top-[0%] bottom-[-0.22%] left-[calc(50%_-_720px)] max-h-full w-[1441px] object-cover"
          alt=""
          src="/image-22@2x.png"
        />
        <div className="absolute top-[-3px] left-[-1px] bg-seagreen w-[1439px] h-[177px]" />
        <div className="absolute top-[207px] left-[calc(50%_-_564px)] rounded-36xl bg-darkslategray-200 w-[1154px] h-[1024px]" />
        <b className="absolute top-[926px] left-[319px] inline-block w-[226px] h-[35px] text-tomato">
          <span>COST</span>
          <span className="text-white">:XYZ</span>
        </b>
        <img
          className="absolute top-[217px] left-[calc(50%_-_438px)] rounded-16xl w-[876px] h-[505px] object-cover hover:animate-[1s_ease_0s_infinite_normal_none_scale-down-center] hover:opacity-[1]"
          alt="projet image"
          src="/rectangle-50@2x.png"
        />
        <b className="absolute top-[68px] left-[45px] text-11xl inline-block w-[579px] h-[85px]">
          PROJECT NAME..
        </b>
        <b className="absolute top-[735px] left-[calc(50%_-_230px)] text-xl inline-block w-[252px] h-14">
          DETAILED DESCRIPTION OF THE PROJECT WITHIN 500 WORDS.
        </b>
        <b className="absolute top-[979px] left-[319px] inline-block w-[247px] text-indigo">
          <span>owner</span>
          <span className="text-white">:-owner name</span>
        </b>
        <div className="absolute top-[976px] left-[721px] rounded-[50%] bg-green w-[42px] h-10" />
        <a
          className="[text-decoration:none] absolute top-[985px] left-[733px] bg-gray-300 w-[18px] h-[18px] overflow-hidden"
          href="tel:8884680318"
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector4.svg"
          />
        </a>
        <TextField
          className="[border:none] bg-[transparent] absolute top-[1056px] left-[calc(50%_-_215px)]"
          color="primary"
          label="Do you have any queries?"
          sx={{ width: 430 }}
          variant="outlined"
        />
        <Button
          className="absolute top-[1151px] left-[calc(50%_-_101px)]"
          sx={{ width: 203 }}
          color="primary"
          variant="contained"
          href="/p-a-y-m-e-n-t"
        >
          BUY
        </Button>
        <div className="absolute top-[979px] left-[653px] rounded-8xs bg-crimson w-[39px] h-[37px]" />
        <a
          className="[text-decoration:none] absolute top-[983px] left-[657px] rounded-8xs bg-maroon w-8 h-[30px] overflow-hidden"
          href="mailto:abhishekabhi0775@gmail.com"
        >
          <img
            className="absolute h-[88%] w-full top-[0%] right-[0%] bottom-[12%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector5.svg"
          />
        </a>
        <GroupComponent5
          imageDimensions="/vector6.svg"
          imageDimensionsText="/vector7.svg"
          imageDimensionsText2="/vector8.svg"
          imageDimensionsText3="/vector9.svg"
          imageDimensionsText4="/y-o-u"
          yOUTop="92.25%"
          yOULeft="-0.07%"
          yOUWidth="100%"
          yOUHeight="7.75%"
          yOURight="0.07%"
          yOUBottom="0.01%"
          propCursor="pointer"
          propTextDecoration="none"
          propCursor1="pointer"
        />
      </div>
    </div>
  );
};

export default PROJECT;
