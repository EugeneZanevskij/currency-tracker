const chartOptions = {
	type: "bar",
	parsing: {
		xAxisKey: "x",
		yAxisKey: "s",
	},
	scales: {
		x: {
			title: {
				display: true,
				text: "Date",
			},
			grid: {
				color: "#888",
				borderWidth: 1,
			},
			// ticks: {
			//   autoSkip: true,
			//   maxTicksLimit: 10,
			//   maxRotation: 0,
			//   minRotation: 0,
			// },
		},
		y: {
			title: {
				display: true,
				text: "Values",
			},
			grid: {
				color: "#888",
				borderWidth: 1,
			},
			beginAtZero: true,
			grace: 1,
		},
	},
};

export default chartOptions;
