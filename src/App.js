import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeaturedImages from "./components/fetch/FeaturedImages";
import ImageInfo from "./components/fetch/ImageInfo";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<FeaturedImages />} />
          <Route exact path="/image/:id" element={<ImageInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
