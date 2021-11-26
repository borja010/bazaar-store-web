import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "app/main";
import Header from "app/components/Skeleton/header";
import Footer from "app/components/Skeleton/footer";
import LoaderContext from "app/context/loaderContext";
import Loader from "app/components/Skeleton/loader/loader";
import "./App.scss";
import Store from "app/context/storeContext";


function App() {
  const [loading, setLoading] = useState(false);
  const value = { loading, setLoading };

  return (
    <Router>
      <div className="App">
        <LoaderContext.Provider value={value}>
          {value.loading ? <Loader /> : ""}
          <Store>
            <Header />
            <div className="content">
              <Main />
            </div>
            <Footer />
          </Store>
        </LoaderContext.Provider>
      </div>
    </Router>
  );
}

export default App;
