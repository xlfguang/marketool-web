import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "@/router/index";
import PrivateRoute from "@/router/routerGurad";
import Header from "@/components/header";
function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<PrivateRoute Element={route.element}></PrivateRoute>}
            >
              {route.children?.map((child, index) => {
                return (
                  <Route
                    key={index}
                    path={child.path}
                    element={child.element}
                  ></Route>
                );
              })}
            </Route>
          );
        })}
      </Routes>
    </>
  );
}
export default App;
