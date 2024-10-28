import { MdOutlineDone } from "react-icons/md";

const Cart = ({ gum }) => {
  const { features, level, name } = gum;
  return (
    <div className="bg-indigo-500 gap-4 p-6 rounded-xl text-center space-y-3 flex flex-col">
      <h2 className="text-4xl font-bold">{gum.price}/mth</h2>
      <h3 className="text-xl font-semibold">Name: {name}</h3>
      <h4 className="text-sm">Position: {level}</h4>
      <hr />
      <div className="flex-grow">
        {features.map((fea, idx) => (
          <ul key={idx} className="flex items-center justify-center gap-3 ">
            <li>{fea}</li>
            <MdOutlineDone className="bg-green-600 w-5 h-5 rounded-full text-white text-xs" />
          </ul>
        ))}
      </div>
      <button className="w-full btn bg-green-500 hover:bg-green-900 border-none hover:text-white">
        Buy Now
      </button>
    </div>
  );
};

export default Cart;
