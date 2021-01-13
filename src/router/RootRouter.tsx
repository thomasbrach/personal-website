import React from "react";
import MainLayout from "../layouts/Main";
import HomeView from "../views/Home";
import { ROUTES } from "./routes";
import RouteWithLayout from "./RouteWithLayout";

const RootRouter = () => {
  return (
    <>
      <RouteWithLayout
        exact
        path={ROUTES.HOME}
        layout={MainLayout}
        component={HomeView}
      />
    </>
  );
};

export default RootRouter;
