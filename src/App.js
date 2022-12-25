import PostsScreen from "./pages/PostsScreen";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layouts/index";
import Routes from "./routes";

// import "./styles/index.scss";

function App() {
  return (
    <Router>
      {/* <Layout> */}
        <Routes />
      {/* </Layout> */}
    </Router>
  );
}

export default App;
