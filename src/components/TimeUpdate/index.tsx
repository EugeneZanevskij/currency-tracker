import { TimeUpdateContainer, TimeUpdateText } from "./styled";
import updateCircles from "../../assets/icons/updateCircles.svg";
import { formatTime } from "@utils/timeUtilities";
import { getCache, isCurrencyCacheValid } from "@utils/cachingUtilities";
import { getEnvVars } from "@constants/env";

const CACHE_CURRENCY_KEY = getEnvVars("cacheCurrencyKey");
const CACHE_LIFETIME = +getEnvVars("cacheLifetime");

export function TimeUpdate() {
	const timeOfUpdate = () => {
		const cachedData = getCache(CACHE_CURRENCY_KEY);
		if (isCurrencyCacheValid(cachedData)) {
			return cachedData.expirationTime - CACHE_LIFETIME;
		}
		return new Date().getTime();
	};

	return (
		<TimeUpdateContainer>
			<img src={updateCircles} alt="update circles" />
			<TimeUpdateText>
				Last updated at {formatTime(timeOfUpdate())}
			</TimeUpdateText>
		</TimeUpdateContainer>
	);
}
