import { React } from "./react";

const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);

const container = document.getElementById("app");
if (container !== null) {
  React.render(element, container);
}
