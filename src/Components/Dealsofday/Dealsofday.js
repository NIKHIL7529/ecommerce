import ProductsTray from "../ProductsTray/ProductsTray";
import "./Dealsofday.css";

export default function Dealsofday() {
  return (
    <div className="deals">
      <div className="dealshead">Deals of The Day</div>
      <ProductsTray />
      <ProductsTray />
      <ProductsTray />
    </div>
  );
}
