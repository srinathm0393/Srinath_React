/**
 * parentElement(Object) => HTML(Browser Understandable);
 */

const parent = React.createElement("div", { id: "parent" },[React.createElement("div", { id: "child" }, 
[React.createElement("h1", {}, "I'am H1 tag"),React.createElement("h2", {}, "I'am H2 tag")]), React.createElement("div", { id: "child" }, 
[React.createElement("h1", {}, "I'am H1 tag"),React.createElement("h2", {}, "I'am H2 tag")])] );

// const heading = React.createElement("h1", { id: 'heading' }, "hello world!");
const root = ReactDOM.createRoot(document.getElementById('root'));
//It will affect the root of the DOM
console.log(parent);
root.render(parent);