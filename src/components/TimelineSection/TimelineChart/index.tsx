import { Component } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { chartOptions } from "./options";
import { candlestickPlugin } from "./candlestickPlugin";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

class TimelineChart extends Component {
	chartData = {
		labels: [
			"2023-08-01",
			"2023-08-02",
			"2023-08-03",
			"2023-08-04",
			"2023-08-05",
		],
		datasets: [
			{
				label: "Weekly Sales",
				data: [
					{
						x: new Date("2023-08-01").setHours(0, 0, 0, 0),
						o: 1.25,
						h: 2.25,
						l: 1.0,
						c: 2.0,
						s: [1.25, 2.0],
					},
					{
						x: new Date("2023-08-02").setHours(0, 0, 0, 0),
						o: 2.0,
						h: 2.25,
						l: 1.0,
						c: 2.1,
						s: [2.0, 2.1],
					},
					{
						x: new Date("2023-08-03").setHours(0, 0, 0, 0),
						o: 2.1,
						h: 2.25,
						l: 1.0,
						c: 1.9,
						s: [2.1, 1.9],
					},
					{
						x: new Date("2023-08-04").setHours(0, 0, 0, 0),
						o: 1.9,
						h: 2.25,
						l: 1.0,
						c: 2.0,
						s: [1.9, 2.0],
					},
					{
						x: new Date("2023-08-05").setHours(0, 0, 0, 0),
						o: 2.0,
						h: 2.25,
						l: 1.0,
						c: 2.1,
						s: [2.0, 2.1],
					},
				],
				backgroundColor: (context) => {
					const {
						raw: { o, c },
					} = context;
					if (c >= o) {
						return "rgba(0, 255, 0)";
					}
					return "rgba(255, 0, 0)";
				},
				borderColor: "rgba(0, 0, 0, 1)",
				borderWidth: 2,
			},
		],
	};

	render() {
		return (
			<Bar
				options={chartOptions}
				data={this.chartData}
				plugins={[candlestickPlugin]}
			/>
		);
	}
}

export default TimelineChart;
