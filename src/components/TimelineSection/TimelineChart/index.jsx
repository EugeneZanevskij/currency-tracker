import React, { Component, createRef } from "react";
import { Chart } from "chart.js/auto";

class TimelineChart extends Component {
	chartRef = createRef();

	chart = null;

	componentDidMount() {
		this.createChart();
	}

	createChart() {
		const ctx = this.chartRef.current.getContext("2d");

		if (this.chart) {
			this.chart.destroy();
		}

		const chartData = {
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
					backgroundColor: [
						"rgba(255, 99, 132, 0.2)",
						"rgba(54, 162, 235, 0.2)",
						"rgba(255, 206, 86, 0.2)",
						"rgba(75, 192, 192, 0.2)",
						"rgba(153, 102, 255, 0.2)",
					],
					borderColor: [
						"rgba(255, 99, 132, 1)",
						"rgba(54, 162, 235, 1)",
						"rgba(255, 206, 86, 1)",
						"rgba(75, 192, 192, 1)",
						"rgba(153, 102, 255, 1)",
					],
					borderWidth: 1,
				},
			],
		};

		const config = {
			type: "bar",
			data: chartData,
			options: {
				parsing: {
					xAxisKey: "x",
					yAxisKey: "s",
				},
			},
		};

		this.chart = new Chart(ctx, config);
	}

	render() {
		return (
			<div>
				<canvas ref={this.chartRef} />
			</div>
		);
	}
}

export default TimelineChart;
