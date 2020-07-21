function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const defaultText = ` # This is a header.

## This is a sub-header.

**Visit** [freecodecamp.org](https://freecodecamp.org)**.**

\`console.log('This is an inline code.');\`

\`\`\`
const greeting = "Hello";
const name = "Ryan";

const printGreeting - () => {console.log(greeting + ' ' + name)};
\`\`\`

- list item 1
- list item 2
- list item 3

> This is a blockquote.
![React Logo w/ Text](https://goo.gl/Umyytc)

**This is a bolded text.**

`;
class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",






    event => {
      this.setState({
        text: event.target.value });

    });this.state = { text: defaultText };this.handleChange = this.handleChange.bind(this);}
  render() {
    const { text } = this.state;

    return (
      React.createElement("div", { className: "container" },
      React.createElement("h1", { className: "text-center text-warning" }, "Markdown Previewer"),
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-sm-6" },
      React.createElement("p", { className: "text-light lead my-4" }, "Editor"),
      React.createElement("textarea", { className: "rounded", id: "editor", value: text, onChange: this.handleChange })),

      React.createElement("div", { className: "col-sm-6" },
      React.createElement("p", { className: "text-light lead my-4" }, "Previewer"),
      React.createElement("div", { className: "bg-white rounded", id: "preview", dangerouslySetInnerHTML: { __html: marked(text, { breaks: true }) } })))));




  }}


ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));