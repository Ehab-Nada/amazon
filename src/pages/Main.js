import Product from "../components/Product/Product";
import { useContext } from "react";
import MyContext from "../Store/store";

const Main = () => {
  const Ctx = useContext(MyContext);
  const Products = Ctx.data.products;
  let Data;
  if (Products) {
    Data = Products.filter((item) =>
      item.title.toLowerCase().includes(Ctx.searchValue.toLowerCase())
    );
  }
  return (
    <main className="p-6 w-full flex flex-wrap z-0">
      {Data && Data.map((item, i) => <Product key={i} item={item} />)}
    </main>
  );
};

export default Main;
