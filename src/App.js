import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BasicExample from "./components/BasicExample/BasicExample";
import ParamsExample from "./components/URL_Parameters/ParamsExample";
import NestingExample from "./components/Nesting/NestingExample";
import AuthExample from "./components/RedirectAuth/AuthExample";
import CustomeLinkExample from "./components/CustomLink/CustomeLinkExample";
import PreventingTraansitionExample from "./components/PreventingTransitions/PreventingTraansitionExample";
import NoMatchExample from "./components/NoMatch/NoMatchExample";
import RecursiveExample from "./components/RecursivePaths/RecursiveExample";
import SideBarExample from "./components/Sidebar/SideBarExample";
import RouterConfigExample from "./components/RouterConfig/RouterConfigExample";

function App() {
  return (
    <div>
      {/* <BasicExample /> */}
      {/* <ParamsExample /> */}
      {/* <NestingExample /> */}
      {/* <AuthExample /> */}
      {/* <CustomeLinkExample /> */}
      {/* <PreventingTraansitionExample /> */}
      {/* <NoMatchExample /> */}
      {/* <RecursiveExample /> */}
      {/* <SideBarExample /> */}

      <RouterConfigExample />
    </div>
  );
}

export default App;
