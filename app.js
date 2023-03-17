const h1 = document.createElement("h1");
h1.innerText = "Hello Everyone from JavaScript ❤️";
const rootId = document.getElementById("root1");
rootId.appendChild(h1);

const h1React = React.createElement(
  "h1",
  {},
  "Namste Everyone from React div Section"
);

const reacth1 = React.createElement(
  "h1",
  {},
  "Namaste Everyone from React ❤️❤️❤️❤️"
);

const container = React.createElement(
  "div",
  {
    className: "conatiner",
    style: { backgroundColor: "blue", color: "white" },
  },
  [h1React, reacth1]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
