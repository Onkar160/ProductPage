/* 
This component is for social media icons (facebook, instagram, x)
Use Case :-
<SocialMedia width="any width in string format" />

This component accepts one prop which is width in string format without any length unit
*/

import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";
import x from "../../../assets/x.svg";

const SocialMedia = ({ width = "" }) => {
  return (
    <div className="flex justify-between">
      <img
        src={facebook}
        alt="FacebookLogo"
        width={width}
        className="cursor-pointer hover:scale-120 transition-transform duration-300 ease-in-out"
      />
      <img
        src={instagram}
        alt="FacebookLogo"
        width={width}
        className="cursor-pointer hover:scale-120 transition-transform duration-300 ease-in-out"
      />
      <img
        src={x}
        alt="FacebookLogo"
        width={width}
        className="cursor-pointer hover:scale-120 transition-transform duration-300 ease-in-out"
      />
    </div>
  );
};

export default SocialMedia;
