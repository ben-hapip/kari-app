import { Avatar } from "@mantine/core";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
export const BigHead = () => {
  return (
    <div className="headerCheese">
      <Avatar src="squid.png" alt="it's me" radius="xl" size="xl"></Avatar>
      <div className="headerText">
        <span className="headerTitle">Kari Bernhardt</span>
        <a href="https://bmadler.wixsite.com/portfolio" target="undefined">
          SMH OMG 😶
        </a>
      </div>
      <div className="socials">
        <Avatar radius="xl">
          <FaFacebook color="	#4267B2" />
        </Avatar>
        <Avatar radius="xl">
          <FaLinkedin color="0072b1" />
        </Avatar>
        <Avatar radius="xl">
          <FaFacebook color="	#4267B2" />
        </Avatar>
        <Avatar radius="xl">
          <FaLinkedin color="0072b1" />
        </Avatar>
      </div>
    </div>
  );
};
