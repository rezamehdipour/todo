import { useState } from "react";

// Components
import AboutPopup from "../AboutPopup/AboutPopup";

// Scss
import "./Header.scss";

const Header = (props) => {
	const [aboutPopupShow, setAboutPopupShow] = useState(false);
	const handleToggleAboutPopupShow = () => {
		setAboutPopupShow((prev) => !prev);
	};

	return (
		<header id="header">
			<AboutPopup show={aboutPopupShow} toggleShow={handleToggleAboutPopupShow} />
			<h1 className="header__title" onClick={handleToggleAboutPopupShow}>
				Todo App
			</h1>
		</header>
	);
};

export default Header;
