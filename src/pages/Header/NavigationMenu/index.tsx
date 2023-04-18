import React, { useState, useEffect } from "react";

import Strings from "../../../strings";

import { List } from "../List";
import { ListItem } from "../ListItem";
import { StyledNav } from "../StyledNav";
import { MobileMenu } from "../MobileMenu";

export const NavigationMenu: React.FC = () => {
	const navStrings = Strings.components.navigationMenu;

	const [isActive, setIsActive] = useState(false);
	const [isHidden, setIsHidden] = useState(true);

	const handleMenu = () => {
		setIsActive(!isActive);
	};

	useEffect(() => {
		if (isActive) {
			setIsHidden(false);
		} else {
			const timeoutId = setTimeout(() => {
				setIsHidden(true);
			}, 400);
			return () => clearTimeout(timeoutId);
		}
	}, [isActive]);

	return (
		<div className="flex">
			<MobileMenu
				isActive={isActive}
				onClick={handleMenu}
			/>
			<StyledNav
				isActive={isActive}
				isHidden={isHidden}
			>
				<List isActive={isActive}>
					{navStrings.map((text, index) => (
						<ListItem
							index={index}
							list={navStrings}
							key={text}
						>
							{text}
						</ListItem>
					))}
				</List>
			</StyledNav>
		</div>
	);
};
