import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Image from "./Image";

export default function PrevImage({ slider, isBtnClicked }) {
  return (
    <Image num={3} slider={slider} isBtnClicked={isBtnClicked} text={"prev"} />
  );
}
