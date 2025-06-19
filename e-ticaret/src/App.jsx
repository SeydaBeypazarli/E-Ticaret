import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";

import HomePage from "./pages/HomePage";

import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <Router>
      <Header />      
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </PageContent>   
       <Footer />  
    </Router>
  );
}

export default App;
