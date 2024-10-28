import Hamburger from "hamburger-react";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export default function BasicExampleDataGrid() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  const [isOpen, setOpen] = useState(false);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Hamburger toggled={isOpen} toggle={setOpen} />

      
      <div className="sweet-loading">
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input
          value={color}
          onChange={(input) => setColor(input.target.value)}
          placeholder="Color of the loader"
        />

        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}
