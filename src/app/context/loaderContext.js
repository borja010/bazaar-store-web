import React from "react";

const LoaderContext = React.createContext({
  loading: false,
  setLoading: () => {}
});

export default LoaderContext;

