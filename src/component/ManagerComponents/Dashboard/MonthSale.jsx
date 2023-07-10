import { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import * as D from "./DashBoardStyle";
import { Chart } from "chart.js";
import axios from "axios";

export default function MonthSales() {
  const [salesData, setSalesData] = useState([]);
  const canvas = useRef(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios("api");
  //     const data = await response();
  //     setSalesData(data);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    if (canvas.current && salesData.length > 0) {
      const ctx = canvas.current.getContext("2d");
      const labels = salesData.map((sale) => sale.month);
      const data = salesData.map((sale) => sale.sales);
      new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "이번달 매출",
              data: data,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
            },
          ],
        },
        options: {
          scales: {
            vAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    }
  }, [salesData]);

  return (
    <Sales>
      <D.TopTitle>이번달 매출</D.TopTitle>
      {/* <canvas ref={canvas} width={400} height={300} /> */}
    </Sales>
  );
}

const Sales = styled.div`
  border: 1px solid #aaa;
  position: relative;
  margin-left: 30px;
  width: 400px;
  height: 300px;
  padding: 3px;
  border-radius: 10px;
`;
