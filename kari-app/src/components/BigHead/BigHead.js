import { Avatar } from "@mantine/core";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
export const BigHead = () => {
  return (
    <div className="headerCheese">
      <div className= 'kariPic'><Avatar src='kari.png' alt="it's me" radius="xl" size={149}></Avatar></div>
      <div className="headerText">
        <span className="headerTitle">Kari Bernhardt</span>
        <a href="https://bmadler.wixsite.com/portfolio" target="undefined">
          SMH OMG 😶
        </a>
      </div>

    </div>
  );
};
