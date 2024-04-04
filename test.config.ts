module.exports = {
	clearMocks: true,
	testEnvironment: "jsdom",
	passWithNoTests: true,
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
		"^.+\\.svg$": "jest-transformer-svg",
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3)$":
			"jest-transform-stub",
	},
};
