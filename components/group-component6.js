import { memo, useMemo } from "react";
import GroupComponent5 from "./group-component5";

const GroupComponent6 = memo(({ vector, vector2, yOUTop }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: yOUTop,
    };
  }, [yOUTop]);

  return (
    <div
      className="absolute top-[926px] left-[0px] w-[1440px] h-[98px]"
      style={groupDivStyle}
    >
      <GroupComponent5
        imageDimensions="/vector14.svg"
        imageDimensionsText="/vector15.svg"
        imageDimensionsText2="/vector16.svg"
        imageDimensionsText3="/vector17.svg"
        imageDimensionsText4="/y-o-u"
        yOUTop="0%"
        yOULeft="0%"
        yOUWidth="100%"
        yOUHeight="100%"
        yOURight="0%"
        yOUBottom="0%"
        propCursor="pointer"
        propTextDecoration="none"
        propCursor1="pointer"
      />
    </div>
  );
});

export default GroupComponent6;
