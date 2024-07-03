import { Hero, Menu, Navbar, News, Outlet } from "./components/index";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
      <Menu />
      <News />
    </>
  );
}

export default App;
