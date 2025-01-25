import Students from "./components/Students";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import ConditionalComponents from "./components/CondtionalComponents";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Forms from "./components/Forms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Nav from "./components/Nav";
import Careers from "./pages/Careers";
import Product from "./pages/Product";

function App() {
  const person = {
    name: "Vinesh Gurram",
    rollNo: 21,
    greetings: "Good Morning",
  };
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />}>
          <Route path="careers" element={<Careers />} />
        </Route>
        <Route path="/product/:id/:slug" element={<Product />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
