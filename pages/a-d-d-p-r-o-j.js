import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import GroupComponent6 from "../components/group-component6";

const ADDPROJ = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-3xl text-gainsboro-100 font-poppins">
      <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-white w-[1440px] h-[1024px] overflow-hidden">
        <img
          className="absolute h-[100.29%] top-[0%] bottom-[-0.29%] left-[calc(50%_-_720px)] max-h-full w-[1440px] object-cover"
          alt=""
          src="/image-25@2x.png"
        />
        <b className="absolute h-[4.14%] top-[8.4%] left-[calc(50%_-_151px)] inline-block w-[302px]">
          Enter your project details...
        </b>
        <div className="absolute top-[192px] left-[calc(50%_-_149px)] rounded-6xl bg-gainsboro-200 shadow-[4px_4px_10px_10px_rgba(54,_50,_50,_0.42)] box-border w-[298px] h-[454px] mix-blend-overlay border-[1px] border-solid border-black" />
        <b className="absolute top-[241px] left-[calc(50%_-_109px)] text-sm text-white">
          Upload your project pic above..
        </b>
        <TextField
          className="[border:none] bg-[transparent] absolute top-[283px] left-[calc(50%_-_118px)] opacity-[0.5]"
          color="error"
          label="Enter your project name"
          sx={{ width: 237 }}
          variant="outlined"
        />
        <TextField
          className="absolute top-[409px] left-[calc(50%_-_118px)] opacity-[0.5]"
          color="primary"
          label="Write a small description about your project "
          sx={{ width: 237 }}
          variant="outlined"
          multiline
        />
        <TextField
          className="[border:none] bg-[transparent] absolute top-[345px] left-[calc(50%_-_119px)] opacity-[0.5]"
          color="primary"
          label="Enter your project domain"
          sx={{ width: 237 }}
          variant="outlined"
        />
        <TextField
          className="[border:none] bg-[transparent] absolute top-[474px] left-[calc(50%_-_116px)] opacity-[0.5]"
          color="error"
          label="Enter cost of your project"
          sx={{ width: 237 }}
          variant="outlined"
        />
        <Button
          className="absolute top-[590px] left-[calc(50%_-_131px)] opacity-[0.75]"
          sx={{ width: 117 }}
          color="primary"
          variant="contained"
          href="/h-o-m-e"
        >
          Save
        </Button>
        <Button
          className="absolute top-[590px] left-[calc(50%_+_11px)] opacity-[0.75]"
          sx={{ width: 117 }}
          color="primary"
          variant="contained"
          href="/y-o-u"
        >
          ADD+1
        </Button>
        <img
          className="absolute top-[120px] left-[calc(50%_-_69px)] rounded-6xl w-[143px] h-[120px] object-cover"
          alt=""
          src="/Project pic@2x.png"
        />
        <input
          className="absolute top-[539px] left-[calc(50%_-_116px)] rounded-6xl bg-silver w-[237px] h-[42px] opacity-[0.5]"
          required={true}
          type="file"
        />
        <GroupComponent6 vector="/vector14.svg" vector2="/vector16.svg" />
      </div>
    </div>
  );
};

export default ADDPROJ;
