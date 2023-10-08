import { memo } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";

const CreditCardForm = memo(() => {
  return (
    <div className="absolute top-[748px] left-[85px] w-[1209px] h-[715px] text-left text-lgi text-white font-poppins">
      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-saddlebrown w-[1097px] h-[715px] hover:shadow-[0px_4px_4px_rgba(69,_59,_59,_0.25)] hover:animate-[1s_ease_3s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]" />
      <Button
        className="absolute top-[601.19px] left-[78.98px]"
        sx={{ width: 367.5599670410156 }}
        color="primary"
        size="small"
        variant="contained"
        href="/p-r-o-j-e-c-t"
      >
        Cancel
      </Button>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[352.28px] left-[78.98px]"
        color="primary"
        sx={{ width: 613.6124877929688 }}
        variant="outlined"
      />
      <b className="absolute top-[295.15px] left-[75.95px] inline-block w-[437.43px] h-[20.4px]">
        Card number
      </b>
      <b className="absolute top-[295.15px] left-[771.57px] inline-block w-[437.43px] h-[20.4px]">
        CVV
      </b>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[216.27px] left-[54.68px]"
        color="primary"
        sx={{ width: 969.021728515625 }}
        variant="outlined"
      />
      <b className="absolute top-[19.04px] left-[63.79px] inline-block w-[437.43px] h-[20.4px]">
        First name
      </b>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[82.97px] left-[42.53px]"
        color="primary"
        sx={{ width: 969.021728515625 }}
        variant="outlined"
      />
      <b className="absolute top-[153.7px] left-[63.79px] inline-block w-[437.43px] h-[20.4px]">
        Last name
      </b>
      <b className="absolute top-[439.33px] left-[63.79px] inline-block w-[379.71px] h-[34px]">
        Valid until
      </b>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[439.33px] left-[455.65px]"
        color="primary"
        sx={{ width: 331.10772705078125 }}
        variant="outlined"
        type="date"
      />
      <Button
        className="absolute top-[601.19px] left-[610.57px]"
        sx={{ width: 379.7107238769531 }}
        color="primary"
        size="small"
        variant="contained"
      >
        Continue
      </Button>
      <img
        className="absolute top-[526px] left-[52px] rounded-3xs w-[127px] h-[47px] object-cover"
        alt=""
        src="/rectangle-68@2x.png"
      />
      <img
        className="absolute top-[526.38px] left-[227.83px] rounded-3xs w-[127.58px] h-[46.25px] object-cover"
        alt=""
        src="/rectangle-69@2x.png"
      />
      <img
        className="absolute top-[526.38px] left-[416.16px] rounded-3xs w-[127.58px] h-[46.25px] object-cover"
        alt=""
        src="/rectangle-70@2x.png"
      />
      <img
        className="absolute top-[526.38px] left-[756.38px] rounded-3xs w-[127.58px] h-[46.25px] object-cover"
        alt=""
        src="/rectangle-72@2x.png"
      />
      <img
        className="absolute top-[526.38px] left-[926.49px] rounded-3xs w-[127.58px] h-[46.25px] object-cover"
        alt=""
        src="/rectangle-73@2x.png"
      />
      <img
        className="absolute top-[526.38px] left-[595.39px] rounded-3xs w-[127.58px] h-[46.25px] object-cover"
        alt=""
        src="/rectangle-71@2x.png"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[352.28px] left-[732.08px]"
        color="primary"
        sx={{ width: 279.4670715332031 }}
        variant="outlined"
      />
    </div>
  );
});

export default CreditCardForm;
