import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

interface MobileMenuProps {
	onClick: () => void;
	isActive: boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
	onClick,
	isActive,
}) => (
	<div className="z-40 cursor-pointer text-white text-3xl sm:hidden">
		{isActive ? (
			<FontAwesomeIcon
				icon={faX}
				onClick={onClick}
			/>
		) : (
			<FontAwesomeIcon
				icon={faBars}
				onClick={onClick}
			/>
		)}
	</div>
);
