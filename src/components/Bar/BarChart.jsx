// import {
//   BarChart as BChart,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   Bar,
// } from "recharts";

import {
  ComposedChart,
  Area,
  CartesianGrid,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const BarChart = () => {
  const gumDetails = [
    {
      id: 1,
      name: "Minty Fresh Gum",
      price: 55.99,
      features: ["Long-lasting mint flavor", "Sugar-free", "Pocket-friendly"],
      level: "Beginner",
    },
    {
      id: 2,
      name: "Bubble Blast Gum",
      price: 60.49,
      features: ["Creates big bubbles", "Strawberry flavor", "Non-sticky"],
      level: "Intermediate",
    },
    {
      id: 3,
      name: "Citrus Zing Gum",
      price: 52.79,
      features: ["Tangy orange taste", "Vegan-friendly", "Refreshing aroma"],
      level: "Beginner",
    },
    {
      id: 4,
      name: "Peppermint Ice Gum",
      price: 65.99,
      features: ["Cooling sensation", "Helps with bad breath", "Sugar-free"],
      level: "Advanced",
    },
    {
      id: 5,
      name: "Tropical Twist Gum",
      price: 58.25,
      features: ["Mixed fruit flavor", "Soft chew", "Gluten-free"],
      level: "Intermediate",
    },
    {
      id: 6,
      name: "Cinnamon Burst Gum",
      price: 53.89,
      features: [
        "Spicy cinnamon flavor",
        "No artificial colors",
        "Low calorie",
      ],
      level: "Advanced",
    },
  ];
  const gum = [
    {
      id: 1,
      name: "Minty Fresh Gum",
      price: 55.99,
      features: ["Long-lasting mint flavor", "Sugar-free", "Pocket-friendly"],
      level: "Beginner",
    },
    {
      id: 2,
      name: "Bubble Blast Gum",
      price: 60.49,
      features: ["Creates big bubbles", "Strawberry flavor", "Non-sticky"],
      level: "Intermediate",
    },
    {
      id: 3,
      name: "Citrus Zing Gum",
      price: 52.79,
      features: ["Tangy orange taste", "Vegan-friendly", "Refreshing aroma"],
      level: "Beginner",
    },
    {
      id: 4,
      name: "Peppermint Ice Gum",
      price: 65.99,
      features: ["Cooling sensation", "Helps with bad breath", "Sugar-free"],
      level: "Advanced",
    },
    {
      id: 5,
      name: "Tropical Twist Gum",
      price: 58.25,
      features: ["Mixed fruit flavor", "Soft chew", "Gluten-free"],
      level: "Intermediate",
    },
    {
      id: 6,
      name: "Cinnamon Burst Gum",
      price: 53.89,
      features: [
        "Spicy cinnamon flavor",
        "No artificial colors",
        "Low calorie",
      ],
      level: "Advanced",
    },
  ];

  return (
    <div className="sm:visible hidden">
      {/* <div>
        <BChart width={1200} height={250} data={gumDetails}>
          <XAxis dataKey="name" />
          <YAxis dataKey={"price"} />
          <Tooltip />
          <Legend />
          <Bar dataKey="name" fill="#8884d8" />
          <Bar dataKey="price" fill="#82ca9d" />
        </BChart>
      </div> */}
      <div>
        <ComposedChart width={730} height={250} data={gum}>
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="id" fill="#8884d8" stroke="#8884d8" />
          <XAxis dataKey={'name'}></XAxis>
          <YAxis dataKey={'price'}></YAxis>
          <Tooltip></Tooltip>
          <Legend></Legend>
          <Bar dataKey="name" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="price" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default BarChart;
