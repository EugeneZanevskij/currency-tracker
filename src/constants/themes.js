import COLORS from "./styles/colors";

const THEME = {
	light: {
		...COLORS,
		backgroundColor: COLORS.white,
		textColor: COLORS.black,
		subTextColor: COLORS.darkGray,
		cardColor: COLORS.lightGray,
		cardTextColor: COLORS.cardGray,
		percentsColor: COLORS.darkBlue,
		modalColor: COLORS.lightGray,
	},
	dark: {
		...COLORS,
		backgroundColor: COLORS.black,
		textColor: COLORS.white,
		subTextColor: COLORS.suvaGray,
		cardColor: COLORS.cardGray,
		cardTextColor: COLORS.lightGray,
		percentsColor: COLORS.lightBlue,
		modalColor: COLORS.modalGray,
	},
};

export default THEME;
