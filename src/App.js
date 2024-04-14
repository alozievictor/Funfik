import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import Navbar from "./Components/Navbar";
const Home = lazy(() => import("./Pages/Home"));

const override = {
  display: "flex",
  justifyContent: "center", // Center horizontally
  alignItems: "center", // Center vertically
  height: "100vh", // Set the height of the container to the full viewport height
  borderColor: "#db0000",
};

function App() {
  const [color] = React.useState("#265670");
  return (
    <Router>
      <Navbar />

      <Suspense
        fallback={
          <div
            style={override}
            className="flex justify-center items-center h-screen"
          >
            <BounceLoader
              color={color}
              size={40}
              aria-label="Loading Spinner"
              data-testid="loader"
              className="flex justify-center items-center"
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
