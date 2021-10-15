import images from "../imgs";

const {
  clear,
  hail,
  heavy_cloud,
  heavy_rain,
  light_cloud,
  light_rain,
  shower,
  sleet,
  snow,
  thunderstorm,
} = images;

export default function imgController(state) {
  switch (state) {
    case "sn":
      return snow;
    case "sl":
      return sleet;
    case "h":
      return hail;
    case "t":
      return thunderstorm;
    case "hr":
      return heavy_rain;
    case "lr":
      return light_rain;
    case "s":
      return shower;
    case "hc":
      return heavy_cloud;
    case "lc":
      return light_cloud;
    case "c":
      return clear;

    default:
      return shower;
  }
}
