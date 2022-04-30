import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store"
import HomeScreen from "./src/screens/HomeScreen";

//利⽤react-redux套件提供的Provider將所有元件包起來，並且藉由store屬性將產⽣的store傳遞給所有元件使⽤

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;