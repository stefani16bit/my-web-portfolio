import "./DigitalArt.css";
import Illustration from "./../../assets/digitalart.png"

function DigitalArt() {
  return (
    <div className="digital-art-container">
      <img src={Illustration} className="digital-art" />
    </div>
  );
}

export default DigitalArt;