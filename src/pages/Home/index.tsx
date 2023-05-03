import React from "react";

import { Hero } from "../Home/Hero";
import { Date } from "./Date";
import { LineUp } from "./LineUp";

const Home: React.FC = () => (
	<main className="bg-gradient-to-b from-summer-gradient-100 via-summer-gradient-200 to-summer-gradient-300 dark:bg-gradient-to-b dark:from-boreal-gradient-100 dark:via-boreal-gradient-200 dark:to-boreal-gradient-300 ">
		<Hero />
		<Date />
		<LineUp />
	</main>
);

export default Home;
