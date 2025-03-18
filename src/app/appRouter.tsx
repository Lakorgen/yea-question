import { createBrowserRouter } from "react-router";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/pages/main";
import { QuestionPage } from "@/pages/question";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/question/:id",
        element: <QuestionPage />,
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
]);
