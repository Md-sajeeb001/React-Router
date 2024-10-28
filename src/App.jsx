import "./index.css";
import Nav from "./components/Nav/Nav";
import Gum from "./components/GumCart/Gum";
import Chart from "./components/Charts/Chart";
import Product from "./components/Product/Product";
import LineChart from "./components/LineChart/LineChart";
import BarChart from "./components/Bar/BarChart";
import FooterNav from "./components/FooterNav/FooterNav";
import Scrollbars from "./components/ReactComponents/Scrollbars";
import BasicExampleDataGrid from "./components/ReactComponents/BasicExampleDataGrid";

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Gum></Gum>
      <Chart></Chart>
      <Product></Product>
      <LineChart></LineChart>
      <BarChart></BarChart>
      <FooterNav></FooterNav>
      <Scrollbars></Scrollbars>
      <BasicExampleDataGrid></BasicExampleDataGrid>
    </div>
  );
};

export default App;
