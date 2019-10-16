import React from "react";
import PropTypes from "prop-types";

class Add extends React.Component {
  state = {
    author: "",
    text: "",
    bigText: "",
    checkbox: false
  };
  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };
  checkboxHandler = e => {
    this.setState({ checkbox: e.currentTarget.checked });
  };
  onBtnClickHandler = e => {
    e.preventDefault();
    const { author, text, bigText } = this.state;
    let id = Date.now();
    this.props.onAddNews({ author, text, bigText, id });
    this.setState({ author: "", text: "", bigText: "", checkbox: false });
  };
  validate = e => {
    const { author, text, bigText, checkbox } = this.state;
    return author.trim() && text.trim() && bigText.trim() && checkbox;
  };
  render() {
    const { author, text, bigText, checkbox } = this.state;
    return (
      <form className="add">
        <input
          id="author"
          type="text"
          className="add__author"
          onChange={this.handleChange}
          placeholder="Ваше имя"
          value={author}
        />
        <textarea
          id="text"
          className="add__text"
          onChange={this.handleChange}
          placeholder="Описание новости"
          value={text}
        ></textarea>
        <textarea
          id="bigText"
          className="add__text"
          onChange={this.handleChange}
          placeholder="Полный текст новости"
          value={bigText}
        ></textarea>
        <label className="add__checkrule">
          <input
            type="checkbox"
            onChange={this.checkboxHandler}
            value={checkbox}
          />
          Я согласен с правилами
        </label>
        <button
          className="add__btn"
          onClick={this.onBtnClickHandler}
          disabled={!this.validate()}
        >
          Опубликовать
        </button>
      </form>
    );
  }
}

Add.propTypes = {
  onAddNews: PropTypes.func.isRequired
};

export { Add };
