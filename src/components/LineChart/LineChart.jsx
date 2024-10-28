import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
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

  return (
    <div className="sm:visible hidden">

      <LChart width={1200} height={400} data={gumDetails}>
        <Line type="monotone" dataKey="price" stroke="blue"></Line>
        <Line dataKey="level" stroke="red"></Line>

        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="price"></YAxis>
      </LChart>

    </div>
  );
};

export default LineChart;

