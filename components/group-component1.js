import { memo, useMemo } from "react";
import Link from "next/link";

const GroupComponent1 = memo(({ dimensions, cOSTLeft, cOSTTop }) => {
  const groupA1Style = useMemo(() => {
    return {
      left: cOSTLeft,
      top: cOSTTop,
    };
  }, [cOSTLeft, cOSTTop]);

  return (
    <Link
      className="cursor-pointer [text-decoration:none] absolute top-[327px] left-[203px] w-80 h-[420px] text-left text-3xl text-white font-poppins"
      href="/p-r-o-j-e-c-t"
      style={groupA1Style}
    >
      <a className="[text-decoration:none] absolute top-[7.27px] left-[0px] rounded-6xl bg-darkslategray-200 w-[316.07px] h-[412.73px]" />
      <b className="absolute top-[366.23px] left-[15.71px] inline-block w-[223.8px] h-[30.52px] text-tomato">
        <span>COST</span>
        <span className="text-white">:XYZ</span>
      </b>
      <img
        className="absolute top-[364.78px] left-[223.8px] w-[49.08px] h-[36.33px] overflow-hidden"
        alt=""
        src={dimensions}
      />
      <div className="absolute top-[0px] left-[21.59px] rounded-6xl bg-gainsboro-200 w-[288.59px] h-[217.99px]" />
      <b className="absolute top-[258.69px] left-[15.71px] text-xl inline-block w-[304.29px] h-[82.84px]">
        Small description in less than 50 words
      </b>
      <b className="absolute top-[225.26px] left-[54.97px] inline-block w-[227.73px] h-[33.43px]">
        PROJECT NAME
      </b>
    </Link>
  );
});

export default GroupComponent1;
