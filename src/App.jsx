import { Hero, Menu, Navbar, Outlet } from "./components/index";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
      <Menu />
    </>
  );
}

export default App;
