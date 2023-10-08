import GroupComponent from "../components/group-component";
import GroupComponent5 from "../components/group-component5";

const FIND1 = () => {
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
        <b className="absolute top-[228px] left-[69px] inline-block w-[724px]">
          SEARCH FOR SKILLED PEOPLE AND RESOURCES..
        </b>
        <GroupComponent />
      </div>
      <GroupComponent5
        imageDimensions="/vector20.svg"
        imageDimensionsText="/vector1.svg"
        imageDimensionsText2="/vector21.svg"
        imageDimensionsText3="/vector22.svg"
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
    </div>
  );
};

export default FIND1;
