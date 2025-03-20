import { createBrowserRouter } from "react-router";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/pages/main";
import { lazy, Suspense } from "react";

const QuestionPage = lazy(() => import("@/pages/question"));

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
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <QuestionPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
]);
