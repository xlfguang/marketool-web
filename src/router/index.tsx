import Home from "@/pages/Home";
import List from "@/pages/List";
const routes: Array<{
  path: string;
  element: JSX.Element;
  children?: Array<{
    path: string;
    element: JSX.Element;
  }>;
}> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
];
export default routes;
