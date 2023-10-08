import { memo } from "react";

const FormContainer = memo(() => {
  return (
    <div className="absolute top-[385px] left-[85px] w-[1080px] h-[240.16px] text-left text-lgi text-white font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-saddlebrown w-[1080px] h-60" />
      <b className="absolute top-[196px] left-[856px] inline-block w-[195px] h-[44.16px]">
        Amazon
      </b>
      <a
        className="[text-decoration:none] absolute top-[49px] left-[48px] rounded-xl w-[189px] h-[142px] bg-[url('/rectangle-59@3x.png')] bg-cover bg-no-repeat bg-[top]"
        href="https://bl-i.thgim.com/public/news/ylry0d/article66572690.ece/alternates/FREE_320/MicrosoftTeams-image.png"
      />
      <a className="[text-decoration:none] absolute top-[49px] left-[566px] rounded-xl w-[189px] h-[142px] bg-[url('/rectangle-58@3x.png')] bg-cover bg-no-repeat bg-[top]" />
      <b className="absolute top-[196px] left-[106px] inline-block w-[153px] h-[44.16px]">
        Paytm
      </b>
      <a
        className="[text-decoration:none] absolute top-[49px] left-[312px] rounded-xl w-[189px] h-[142px] bg-[url('/rectangle-57@3x.png')] bg-cover bg-no-repeat bg-[top]"
        href="https://images.ctfassets.net/1nw4q0oohfju/5orczAiNhZlWpfSc1udRDv/73c35b34728ed63695962ecc12ffae5b/google-pay-sheet-web-payments-sdk.png"
      />
      <img
        className="absolute top-[49px] left-[814px] rounded-xl w-[189px] h-[142px] object-cover"
        alt=""
        src="/rectangle-56@2x.png"
      />
      <b className="absolute top-[196px] left-[359px] inline-block w-[123px] h-[44.16px]">
        GPay
      </b>
      <b className="absolute top-[196px] left-[614px] inline-block w-[201px] h-[44.16px]">
        PhonePe
      </b>
    </div>
  );
});

export default FormContainer;
