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
	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			callbacks: {
				label: (context) => {
					const data = context.dataset.data[context.dataIndex];
					return `Open: ${data.o},  High: ${data.h}, Low: ${data.l}, Close: ${data.c}`;
				},
			},
		},
	},
};

export default chartOptions;
