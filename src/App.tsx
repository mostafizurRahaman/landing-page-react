import { RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import router from "./routes/routes";

function App() {
   AOS.init({
      duration: 1000,
      easing: "ease",
   });
   return (
      <>
         <RouterProvider router={router} />;
      </>
   );
}

export default App;
