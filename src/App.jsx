import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/footer";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="h-[100%]">
        <Suspense fallback={console.log("Loading...")}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default App;
