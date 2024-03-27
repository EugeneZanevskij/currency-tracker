import { Chart } from "chart.js";

interface CandleDataPoint {
	h: number;
	l: number;
}

export const candlestickPlugin = {
	id: "candlestick",
	beforeDatasetsDraw(chart: Chart) {
		const {
			ctx,
			data,
			scales: { y },
		} = chart;

		ctx.save();
		ctx.lineWidth = 2;
		ctx.strokeStyle = "rgba(0, 0, 0, 1)";

		data.datasets[0].data.forEach((_, index: number) => {
			const currentData = data.datasets[0].data[
				index
			] as unknown as CandleDataPoint;
			ctx.beginPath();
			ctx.moveTo(
				chart.getDatasetMeta(0).data[index].x,
				chart.getDatasetMeta(0).data[index].y
			);
			ctx.lineTo(
				chart.getDatasetMeta(0).data[index].x,
				y.getPixelForValue(currentData.h)
			);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(
				chart.getDatasetMeta(0).data[index].x,
				chart.getDatasetMeta(0).data[index].y
			);
			ctx.lineTo(
				chart.getDatasetMeta(0).data[index].x,
				y.getPixelForValue(currentData.l)
			);
			ctx.stroke();
		});
	},
};
