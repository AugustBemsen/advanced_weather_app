export default function tempController(temp, active) {
  if (active === "fahrenheit") {
    return Math.round(temp * 1.8 + 32);
  } else {
    return Math.round(temp);
  }
}
