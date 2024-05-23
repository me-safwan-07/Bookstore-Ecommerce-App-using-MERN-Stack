import React from "react";

import ProductItem from "./components/ProductItem";
import Header from "./components/Header";
import CustomItemContext from "./context/ItemContext";
const App = () => {
  return(
    <CustomItemContext>
      <Header />
      <ProductItem />
    </CustomItemContext>
  );
};

export default App;