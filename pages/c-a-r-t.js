import LinkCard from "../components/link-card";
import GroupIcon from "../components/group-icon";
import GroupComponent5 from "../components/group-component5";

const CART = () => {
  return (
    <div className="relative bg-white w-full h-[1393px] overflow-hidden text-left text-11xl text-white font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[1393px] overflow-hidden">
        <img
          className="absolute h-[100.25%] top-[0%] bottom-[-0.25%] left-[calc(50%_-_720px)] max-h-full w-[1440px] object-cover"
          alt=""
          src="/image-24@2x.png"
        />
        <div className="absolute top-[171px] left-[0px] bg-darkseagreen w-[1440px] h-[115px] mix-blend-color-burn" />
        <LinkCard />
        <b className="absolute top-[239px] left-[calc(50%_-_299px)] inline-block w-[574px] h-[17px]">
          Your purchases appear here..
        </b>
        <GroupIcon />
        <b className="absolute top-[204px] left-[129px] text-[32px]">CART..</b>
        <GroupComponent5
          imageDimensions="/vector.svg"
          imageDimensionsText="/vector1.svg"
          imageDimensionsText2="/vector2.svg"
          imageDimensionsText3="/vector3.svg"
          imageDimensionsText4="/y-o-u"
          yOUTop="92.25%"
          yOULeft="0%"
          yOUWidth="100%"
          yOUHeight="7.75%"
          yOURight="0%"
          yOUBottom="0%"
          propCursor="pointer"
          propTextDecoration="none"
          propCursor1="pointer"
        />
        <LinkCard cOSTLeft="235px" cOSTTop="337px" />
        <LinkCard cOSTLeft="235px" cOSTTop="837px" />
        <LinkCard cOSTLeft="901px" cOSTTop="837px" />
      </div>
    </div>
  );
};

export default CART;
