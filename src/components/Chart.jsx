import { Pie } from "@ant-design/charts";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Chart = ({ transactions }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const filteredItem = transactions.map((item) => {
        if (item.type === "Xarajat") {
          return {
            type: item.category,
            value: item.amount,
          };
        } else {
          return { type: "Daromad", value: item.amount || 0 };
        }
      });
      setData(filteredItem);
    }, 1000);
  }, [transactions]);

  const config = {
    data: data,
    angleField: "value",
    colorField: "type",
    responsive: true,
    label: {
      type: "outer",
      content: "{name} {percentage}",
      style: {
        fontSize: 12,
        fontWeight: "bold",
      },
    },
    interactions: [{ type: "element-active" }],
    legend: {
      position: "right",
      offsetY: 0,
      itemSpacing: 5,
    },
    animation: {
      appear: {
        animation: "zoom-in",
        duration: 1000,
      },
      update: {
        animation: "zoom-in",
        duration: 1000,
      },
      enter: {
        animation: "fade-in",
        duration: 1000,
      },
      leave: {
        animation: "fade-out",
        duration: 1000,
      },
    },
  };

  return (
    <Container className="my-5">
      <div className="chart-container">
        <Pie {...config} />
      </div>
    </Container>
  );
};

export default Chart;
