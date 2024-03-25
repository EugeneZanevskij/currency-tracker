import Bankcard from "../pages/Bankcard";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import { ROUTES } from "./routes.ts";

const NAVBAR = {
	HOME: {
		element: Home,
		link: ROUTES.HOME,
	},
	TIMELINE: {
		element: Timeline,
		link: ROUTES.TIMELINE,
	},
	BANKCARD: {
		element: Bankcard,
		link: ROUTES.BANKCARD,
	},
};

export default NAVBAR;
