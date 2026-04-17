import React, { useContext } from "react";
import { FriendContactContext } from "../context/FriendContactProvider";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { Legend } from "rechart";
import EmptyPage from "./EmptyPage";
import CustomLigend from "../ui/CustomLigend";

const COLORS = ["#7c3aed", "#22c55e", "#14532d"];

const Stars = () => {
  const { friendContact } = useContext(FriendContactContext);
  const getChartData = (data) => {
    const summary = {
      call: 0,
      text: 0,
      video: 0,
    };

    data.forEach((item) => {
      summary[item.action]++;
    });

    return [
      { name: "Call", value: summary.call },
      { name: "Text", value: summary.text },
      { name: "Video", value: summary.video },
    ];
  };
  const chartData = getChartData(friendContact);

  return (
    <div>
      {friendContact.length === 0 ? (
        <EmptyPage></EmptyPage>
      ) : (
        <div className="container mx-auto bg-[#f7f5f8ec] p-4  mt-4">
          {/* Title */}
          <h2 className="text-4xl font-bold py-6 mt-4">Friendship Analytics</h2>

          {/* Sub title */}
          <p className="text-sm text-gray-500 mb-6">By Interaction Type</p>

          <div className="flex justify-center items-center">
            <PieChart width={300} height={300}>
              <Pie
                data={chartData}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={60} // donut effect 🔥
                outerRadius={90}
                paddingAngle={3}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
            ;
          </div>
          {/* <CustomLigend /> */}
        </div>
      )}
    </div>
  );
};

export default Stars;
