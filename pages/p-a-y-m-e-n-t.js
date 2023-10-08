import { Button } from "@mui/material";
import FormContainer from "../components/form-container";
import CreditCardForm from "../components/credit-card-form";
import GroupComponent5 from "../components/group-component5";

const PAYMENT = () => {
  return (
    <div className="relative bg-white w-full h-[1912px] overflow-hidden text-left text-6xl text-white font-poppins">
      <div className="absolute top-[3px] left-[0px] bg-white w-[1440px] h-[1909px] overflow-hidden">
        <img
          className="absolute h-[99.7%] top-[0.3%] bottom-[0%] left-[calc(50%_-_720px)] max-h-full w-[1437px] object-cover"
          alt=""
          src="/image-23@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] w-[1437px] h-[151px] text-lgi">
          <div className="absolute top-[0px] left-[0px] bg-seagreen w-[1437px] h-[151px]" />
          <b className="absolute top-[105.39px] left-[79.83px] inline-block w-[886.15px] h-[45.61px]">{`<-PAYMENT METHODS..`}</b>
        </div>
        <Button
          className="absolute top-[1559px] left-[calc(50%_-_179px)]"
          sx={{ width: 237 }}
          color="primary"
          variant="contained"
          href="/a-f-t-e-r-p-a-y"
        >
          PAY
        </Button>
        <div className="absolute top-[205px] left-[85px] w-[1126.54px] h-[97px] text-xl">
          <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[1086.76px] h-[97px]" />
          <div className="absolute top-[27px] left-[76px] font-medium inline-block w-[543.38px] h-[41.37px]">
            Amount to be paid
          </div>
          <b className="absolute top-[26px] left-[879px] inline-block w-[247.54px] h-[41.37px]">
            XYZ
          </b>
        </div>
        <b className="absolute top-[330px] left-[113px] inline-block w-[110px] h-[27px]">
          UPI
        </b>
        <FormContainer />
        <b className="absolute top-[685px] left-[85px] inline-block w-[272px] h-[35px]">
          CREDIT/DEBIT CARD
        </b>
        <CreditCardForm />
        <GroupComponent5
          imageDimensions="/vector10.svg"
          imageDimensionsText="/vector11.svg"
          imageDimensionsText2="/vector12.svg"
          imageDimensionsText3="/vector13.svg"
          yOUTop="95.65%"
          yOULeft="0%"
          yOUWidth="100%"
          yOUHeight="4.11%"
          yOURight="0%"
          yOUBottom="0.24%"
          propCursor="pointer"
          propTextDecoration="none"
          propCursor1="unset"
        />
      </div>
    </div>
  );
};

export default PAYMENT;
