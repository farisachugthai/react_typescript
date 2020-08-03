import React from 'react';
import ReactDOM from 'react-dom';
import { Remarkable } from 'remarkable';

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Hello, **world**!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return React.createElement(
      "div",
      { className: "MarkdownEditor" },
      React.createElement(
        "h3",
        null,
        "Input"
      ),
      React.createElement(
        "label",
        { htmlFor: "markdown-content" },
        "Enter some markdown"
      ),
      React.createElement("textarea", {
        id: "markdown-content",
        onChange: this.handleChange,
        defaultValue: this.state.value
      }),
      React.createElement(
        "h3",
        null,
        "Output"
      ),
      React.createElement("div", {
        className: "content",
        dangerouslySetInnerHTML: this.getRawMarkup()
      })
    );
  }
}

ReactDOM.render(React.createElement(MarkdownEditor, null), document.getElementById('markdown-example'));

