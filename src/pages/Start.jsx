import girl from "../assets/girl.jpg"
import '../style/Start.css'; 
import { IoIosHome } from "react-icons/io";
import { MdMapsHomeWork } from "react-icons/md";
import { SiHomebridge } from "react-icons/si";

const Start = () => {
  return (
    <>
     
     <div className="start">
    <img src={girl} alt=""  className="start-img"/>
     </div>
     <div className="head">
      <h1>Hi, I'm Betsy!</h1>
      <h1>What can I help you with?</h1>
     </div>
     <div className="start-boxes">
      <div className="start-box">
      <IoIosHome  className="start-icon"/>
      <h5>Buying a home</h5>
      </div>
      <div className="start-box">
      <MdMapsHomeWork  className="start-icon"/>
      <h5>Refinance my mortagage</h5>
      </div>
      <div className="start-box">
      <SiHomebridge  className="start-icon"/>
      <h5>Get cash from my home</h5>
      </div>

     </div>
    </>
  );
};

export default Start;
