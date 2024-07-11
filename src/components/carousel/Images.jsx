import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Image from "./Image";

export default function Images({ slider, isBtnClicked }) {
  return (
    <>
      <Image num={1} slider={slider} isBtnClicked={isBtnClicked} />
      <Image num={2} slider={slider} isBtnClicked={isBtnClicked} />
      <Image num={3} slider={slider} isBtnClicked={isBtnClicked} />
    </>
  );
}
