function getCache(cacheKey) {
	return JSON.parse(localStorage.getItem(cacheKey)) || {};
}

function saveCache(cacheKey, cacheValue) {
	localStorage.setItem(cacheKey, JSON.stringify(cacheValue));
}

function removeCache(cacheKey) {
	localStorage.removeItem(cacheKey);
}

function isCacheValid(cacheEntry) {
	return new Date().getTime() < cacheEntry.expirationTime;
}

export { getCache, saveCache, removeCache, isCacheValid };
