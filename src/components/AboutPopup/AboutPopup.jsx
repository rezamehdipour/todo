import ReactDom from "react-dom";

// Svgs
import { VscChromeClose } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

// Scss
import "./AboutPopup.scss";

const AboutPopup = ({ show, toggleShow }) => {
	if (!show) return null;

	return ReactDom.createPortal(
		<>
			<div className="aboutPopup__backdrop" onClick={toggleShow}></div>
			<div className="aboutPopup__container">
				<div className="aboutPopup__closeButton" onClick={toggleShow}>
					<VscChromeClose />
				</div>

				<div className="aboutPopup__header">
					<span style={{ marginBottom: "5px" }}>
						&lt;<b>Todo App</b>/&gt;
					</span>
					<span style={{ fontSize: "14px" }}>by Reza Mehdipour</span>
				</div>

				<div className="aboutPopup__socials flex-center">
					<a href="https://github.com/rezamehdipour" target="_blank" rel="noreferrer" className="github">
						<SiGithub />
					</a>
					<a href="https://www.linkedin.com/in/rezamehdipour/" target="_blank" rel="noreferrer" className="linkedin">
						<FaLinkedin />
					</a>
				</div>
			</div>
		</>,
		document.getElementById("aboutPopup")
	);
};

export default AboutPopup;
