import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

export default function AttendanceChart() {
  const data = {
    datasets: [
      {
        data: [94, 6],
        backgroundColor: [
          "#7C5CFC", // البنفسجي
          "#E9E9F5", // الرمادي
        ],
        borderWidth: 0,
        cutout: "82%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="relative w-24 h-24">
      <Doughnut data={data} options={options} />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-2xl text-[#5B4CF5]">
          94%
        </span>
      </div>
    </div>
  );
}