import { memo } from "react";

const GroupComponent = memo(() => {
  return (
    <div className="absolute top-[626px] left-[30px] w-[1348px] h-[508px] text-left text-11xl text-black font-poppins">
      <div className="absolute h-[110.24%] w-full top-[2.76%] right-[0%] bottom-[-12.99%] left-[0%] rounded-6xl bg-gainsboro-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border [mix-blend-mode:linear-burn] border-[1px] border-solid border-black" />
      <a
        className="[text-decoration:none] absolute h-[12.45%] w-[83.98%] top-[65.06%] right-[8.01%] bottom-[22.49%] left-[8.01%] rounded-xl bg-peru shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)]"
        href="https://science.gc.ca/site/science/en/citizen-science-portal"
      />
      <a
        className="[text-decoration:none] absolute h-[12.45%] w-[83.98%] top-[22.3%] right-[8.01%] bottom-[65.24%] left-[8.01%] rounded-xl bg-mediumseagreen shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)]"
        href="https://www.nasa.gov/mission_pages/station/research/open_source_science_ops"
      />
      <a
        className="[text-decoration:none] absolute h-[12.45%] w-[83.98%] top-[43.68%] right-[8.01%] bottom-[43.87%] left-[8.01%] rounded-xl bg-plum shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)]"
        href="https://science.nasa.gov/open-science-overview"
      />
      <a
        className="[text-decoration:none] absolute h-[8.55%] w-[79.01%] top-[24.35%] left-[10.46%] font-bold text-[inherit] inline-block"
        href="https://www.nasa.gov/mission_pages/station/research/open_source_science_ops"
      >
        Open Source opportunities from the international Space Station
      </a>
      <a
        className="[text-decoration:none] absolute h-[10.97%] w-[58.53%] top-[67.29%] left-[10.01%] font-bold text-[inherit] inline-block"
        href="https://science.gc.ca/site/science/en/citizen-science-portal"
      >
        Government of Canada Citizen Science Portal
      </a>
      <b className="absolute h-[8.36%] w-[33.09%] top-[6.69%] left-[7.05%] inline-block">
        MORE RESOURCES:
      </b>
      <a
        className="[text-decoration:none] absolute h-[6.13%] w-[73.15%] top-[45.91%] left-[10.46%] font-bold text-[inherit] inline-block"
        href="https://science.nasa.gov/open-science-overview"
      >
        Learn about Open-source science initiative
      </a>
      <a
        className="[text-decoration:none] absolute h-[12.45%] w-[83.98%] top-[89.46%] right-[8.01%] bottom-[-1.92%] left-[8.01%] rounded-xl bg-goldenrod shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)]"
        href="https://www.citizenscience.gov/#"
      />
      <b className="absolute h-[10.33%] w-[47.33%] top-[91.53%] left-[12.17%] inline-block">
        Find crowdsourcing projects
      </b>
    </div>
  );
});

export default GroupComponent;
