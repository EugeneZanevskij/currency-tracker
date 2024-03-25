export const formatTime = (milliseconds: number) => {
	const date = new Date(milliseconds);
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const timeName = hours >= 12 ? "PM" : "AM";
	const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
	const formattedMinutes = minutes.toString().padStart(2, "0");

	return `${formattedHours}:${formattedMinutes} ${timeName}`;
};

export const formatDate = (date: Date) => {
	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear();

	return `${day}.${month}.${year}`;
};
