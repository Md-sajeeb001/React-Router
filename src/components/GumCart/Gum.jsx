import Cart from "../Cart/Cart";

const Gum = () => {
  const gumData = [
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
      features: [
        "Creates big bubbles",
        "Strawberry flavor",
        "Non-sticky,Long-lasting mint flavor",
        "Sugar-free",
        "Pocket-friendly",
      ],
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
      features: [
        "Cooling sensation",
        "Helps with bad breath",
        "Sugar-free,Long-lasting mint flavor",
        "Sugar-free",
        "Pocket-friendly",
      ],
      level: "Advanced",
    },
    {
      id: 5,
      name: "Tropical Twist Gum",
      price: 58.25,
      features: [
        "Mixed fruit flavor",
        "Soft chew",
        "Gluten-free,Spicy cinnamon flavor,Spicy cinnamon flavor",
      ],
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
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gumData.map((gum) => (
          <Cart key={gum.id} gum={gum}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Gum;
