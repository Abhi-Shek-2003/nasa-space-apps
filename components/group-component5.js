import { memo, useMemo } from "react";
import Link from "next/link";

const GroupComponent5 = memo(
  ({
    imageDimensions,
    imageDimensionsText,
    imageDimensionsText2,
    imageDimensionsText3,
    imageDimensionsText4,
    yOUTop,
    yOULeft,
    yOUWidth,
    yOUHeight,
    yOURight,
    yOUBottom,
    propCursor,
    propTextDecoration,
    propCursor1,
  }) => {
    const groupDiv1Style = useMemo(() => {
      return {
        top: yOUTop,
        left: yOULeft,
        width: yOUWidth,
        height: yOUHeight,
        right: yOURight,
        bottom: yOUBottom,
      };
    }, [yOUTop, yOULeft, yOUWidth, yOUHeight, yOURight, yOUBottom]);

    const rectangleDivStyle = useMemo(() => {
      return {
        cursor: propCursor,
        textDecoration: propTextDecoration,
      };
    }, [propCursor, propTextDecoration]);

    const yOUStyle = useMemo(() => {
      return {
        cursor: propCursor1,
      };
    }, [propCursor1]);

    return (
      <div
        className="absolute top-[1174px] left-[0px] w-[1440px] h-[98px] text-left text-lgi text-black font-poppins"
        style={groupDiv1Style}
      >
        <div className="absolute h-[98.98%] w-full top-[0%] right-[0%] bottom-[1.02%] left-[0%] bg-gainsboro-300" />
        <Link
          className="cursor-pointer [text-decoration:none] absolute h-full w-3/12 top-[0%] right-[75%] bottom-[0%] left-[0%] bg-lightgray"
          href="/h-o-m-e"
        />
        <Link
          className="cursor-pointer [text-decoration:none] absolute h-[98.98%] w-3/12 top-[0%] right-[50%] bottom-[1.02%] left-[25%] bg-lightgray"
          href="/m-e-n-u"
        />
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[65.31%] left-[35.63%] font-bold text-[inherit]"
          href="/m-e-n-u"
        >
          MENU
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] absolute h-[98.98%] w-3/12 top-[1.02%] right-[24.93%] bottom-[0%] left-[50.07%] bg-lightgray"
          href="/c-a-r-t"
        />
        <div
          className="absolute h-[98.98%] w-[24.93%] top-[1.02%] right-[0%] bottom-[0%] left-[75.07%] bg-lightgray"
          style={rectangleDivStyle}
        />
        <img
          className="absolute h-[49.76%] w-[12.22%] top-[15.75%] right-[82.22%] bottom-[34.49%] left-[5.56%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={imageDimensions}
        />
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[69.39%] left-[9.38%] font-bold text-[inherit]"
          href="/h-o-m-e"
        >
          HOME
        </Link>
        <img
          className="absolute h-[31.43%] w-[11.67%] top-[23.94%] right-[56.67%] bottom-[44.63%] left-[31.67%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={imageDimensionsText}
        />
        <img
          className="absolute h-[47.14%] w-[13.89%] top-[15.75%] right-[30.56%] bottom-[37.11%] left-[55.56%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={imageDimensionsText2}
        />
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[65.31%] left-[61.6%] font-bold text-[inherit]"
          href="/c-a-r-t"
        >
          CART
        </Link>
        <img
          className="absolute h-[49.76%] w-[12.78%] top-[14.58%] right-[5.56%] bottom-[35.66%] left-[81.67%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={imageDimensionsText3}
        />
        <a
          className="[text-decoration:none] absolute top-[65.31%] left-[86.67%] font-bold text-[inherit]"
          style={yOUStyle}
        >
          YOU
        </a>
      </div>
    );
  }
);

export default GroupComponent5;
