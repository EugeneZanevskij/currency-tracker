export function getCache(cacheKey: string) {
	return JSON.parse(localStorage.getItem(cacheKey)!) || undefined;
}

export function saveCache(cacheKey: string, cacheValue: any) {
	localStorage.setItem(cacheKey, JSON.stringify(cacheValue));
}

export function removeCache(cacheKey: string) {
	localStorage.removeItem(cacheKey);
}

export function isCurrencyCacheValid(cacheEntry: ICurrencyCache) {
	if (!cacheEntry) return false;
	return new Date().getTime() < cacheEntry.expirationTime;
}
