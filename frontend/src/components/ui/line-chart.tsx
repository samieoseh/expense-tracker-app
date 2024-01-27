import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { useTheme } from "./theme-provider";
import "chartjs-adapter-moment";
import { LineChartType } from "../../typings";

const LineChart = ({
  id,
  labels,
  amounts,
  colors,
}: {
  id: string;
  labels: string[];
  amounts: number[];
  colors: { dark: string; light: string };
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chartRef = useRef<any>(null);
  const theme = useTheme();
  const dataItems: LineChartType[] = [];
  for (let i = 0; i < amounts.length; i++) {
    dataItems.push({
      x: labels[i],
      y: amounts[i],
    });
  }

  useEffect(() => {
    if (!chartRef) return;
    if (chartRef.current) {
      const color = theme.theme === "dark" ? "white" : "black";
      const ctx = chartRef.current.getContext("2d");
      const data = {
        datasets: [
          {
            data: dataItems,
            fill: false,
            borderColor: theme.theme === "dark" ? colors.dark : colors.light,
            tension: 0.3,
          },
        ],
      };
      const chartStatus = Chart.getChart(id);

      if (chartStatus != undefined) {
        chartStatus.destroy();
      }
      new Chart(ctx, {
        type: "line",
        data: data,
        options: {
          scales: {
            x: {
              grid: {
                display: false,
              },
              type: "time",
              time: {
                unit: "day",
              },
              border: {
                display: false,
              },
              ticks: {
                color: color,
              },
            },

            y: {
              grid: {
                color: "rgba(0, 0, 0, 0)",
              },
              border: {
                display: false,
              },
              ticks: {
                callback: function (item, index) {
                  if (index === data.datasets[0].data.length + 1) {
                    if (+item >= 1000) {
                      return (
                        "$" +
                        item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      );
                    } else {
                      return "$" + item;
                    }
                  }
                },
                color: color,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }
  }, [chartRef, id, theme]);
  return <canvas ref={chartRef} id={id} width="400" height="200" />;
};

export default LineChart;
