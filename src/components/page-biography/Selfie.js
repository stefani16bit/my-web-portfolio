import "./Selfie.css";
import SelfieIcon from "./../../assets/selfie.png"

function Selfie() {
  return (
    <div className="selfie-container">
      <img src={SelfieIcon} className="selfie" />
    </div>
  );
}

export default Selfie;