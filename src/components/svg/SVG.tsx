import ArrowSVG from "@svg/arrow.svg";
import PlaySVG from "@svg/play.svg";
import StopSVG from "@svg/stop.svg";

export const SVG = () => null;

SVG.Arrow = ArrowSVG;
SVG.Play = PlaySVG;
SVG.Stop = StopSVG;

SVG.ByName = (props: {name: string; className?: string}) => {
  switch (props.name) {
    default:
      // Needs to be SVG.NoImg
      return <SVG.Arrow className={props.className} />;
  }
};
