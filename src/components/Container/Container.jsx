const Container = ({ children }) => {
  const container = {
    "max-width": "1282px",
    margin: "auto",
  };

  return <div style={container}>{children}</div>;
};

export default Container;
