import { React } from "./react";

const element = (
  <div id="foo">
  </div>
);

const container = document.getElementById("app");
React.render(element, container);
