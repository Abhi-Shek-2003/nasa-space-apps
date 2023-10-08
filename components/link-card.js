import { memo, useMemo } from "react";
import Link from "next/link";

const LinkCard = memo(({ cOSTLeft, cOSTTop }) => {
  const groupA2Style = useMemo(() => {
    return {
      left: cOSTLeft,
      top: cOSTTop,
    };
  }, [cOSTLeft, cOSTTop]);

  return (
    <Link
      className="cursor-pointer [text-decoration:none] absolute top-[337px] left-[901px] w-[320.17px] h-[420px] text-left text-3xl text-white font-poppins"
      href="/p-r-o-j-e-c-t"
      style={groupA2Style}
    >
      <a className="[text-decoration:none] absolute top-[0px] left-[0px] rounded-6xl bg-darkslategray-200 w-80 h-[420px]" />
      <b className="absolute top-[267.68px] left-[11.93px] text-xl inline-block w-[308.07px] h-[84.3px]">
        Small description in less than 50 words
      </b>
      <b className="absolute top-[360.85px] left-[5.96px] inline-block w-[226.58px] h-[31.06px] text-tomato">
        <span>COST</span>
        <span className="text-white">:XYZ</span>
      </b>
      <b className="absolute top-[224.79px] left-[53.67px] inline-block w-[230.56px] h-[34.01px]">
        PROJECT NAME
      </b>
      <div className="absolute top-[0px] left-[28px] rounded-6xl bg-gainsboro-200 w-[292.17px] h-[221.83px]" />
    </Link>
  );
});

export default LinkCard;
