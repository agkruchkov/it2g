import React from "react";
import configureAppStore from "./store/store";
import { Provider } from "react-redux";

import CreateForm from "./components/CreateForm";
import VisibleItemsList from "./components/VisibleItemsList";
import Filter from "./components/Filter";

const store = configureAppStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="app container">
        <header className="header">
          <h1>TODO List</h1>
        </header>
        <main className="main">
          <CreateForm />
          <Filter />
          <VisibleItemsList />
        </main>
      </div>
    </Provider>
  );
};

export default App;
