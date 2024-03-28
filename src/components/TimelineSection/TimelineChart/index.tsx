import { Component } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ScriptableContext,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { chartOptions } from "./options";
import { candlestickPlugin } from "./candlestickPlugin";
import { getCache } from "@utils/cachingUtilities";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

interface ChartContextRaw {
	o: number;
	c: number;
}

interface TimelineChartProps {
	id: string;
}

export class TimelineChart extends Component<TimelineChartProps> {
	createChartData = (chartData: ICurrencyChartData) => {
		console.log(chartData);
		return {
			labels: Object.keys(chartData),
			datasets: [
				{
					label: "Weekly Sales",
					data: Object.keys(chartData).map((date) => {
						const currencyData = chartData[date];
						console.log({
							x: Date.parse(date),
							o: currencyData.open,
							h: currencyData.high,
							l: currencyData.low,
							c: currencyData.close,
							s: [currencyData.open, currencyData.close] as [number, number],
						});
						return {
							x: new Date(date).setHours(0, 0, 0, 0),
							o: currencyData.open,
							h: currencyData.high,
							l: currencyData.low,
							c: currencyData.close,
							s: [currencyData.open, currencyData.close] as [number, number],
						};
					}),
					backgroundColor: (context: ScriptableContext<"bar">) => {
						const { o, c } = context.raw as ChartContextRaw;
						let color = c >= o ? "rgba(0, 255, 0)" : "rgba(255, 0, 0)";
						return color;
					},
					borderColor: "rgba(0, 0, 0, 1)",
					borderWidth: 2,
				},
			],
		};
	};

	render() {
		const { id } = this.props;

		if (!getCache(id)) return null;

		return (
			<Bar
				options={chartOptions}
				data={this.createChartData(getCache(id) as ICurrencyChartData)}
				plugins={[candlestickPlugin]}
			/>
		);
	}
}
