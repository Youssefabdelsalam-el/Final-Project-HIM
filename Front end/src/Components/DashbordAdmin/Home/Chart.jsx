import { IoStatsChartOutline } from "react-icons/io5";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

const data = [
  {
    name: "الفرقة الأولى",
    students: 380,
    color: "#2563EB",
  },
  {
    name: "الفرقة الثانية",
    students: 320,
    color: "#7BA7D9",
  },
  {
    name: "الفرقة الثالثة",
    students: 300,
    color: "#10B981",
  },
  {
    name: "الفرقة الرابعة",
    students: 284,
    color: "#D99A00",
  },
];

export default function Chart() {
  return (
    <div className="w-full min-w-0 bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl">
        <div className="flex items-center gap-4">
            <IoStatsChartOutline className="w-7 h-7" />
            <h1 className="text-[25px] font-bold">توزيع الطلاب حسب الفرقة</h1>
        </div>
    <div className="w-full h-100">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 30,
            right: 20,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="name"
            tick={{ fontSize: 14 }}
          />

          <YAxis
            domain={[0, 400]}
            ticks={[0, 100, 200, 300, 400,500, 600, 700, 800, 900,1000]}
          />

          <Bar
            dataKey="students"
            radius={[5, 5, 0, 0]}
            barSize={70}
          >
            <LabelList
              dataKey="students"
              position="top"
              fontSize={16}
              fill="#111827"
            />

            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
}