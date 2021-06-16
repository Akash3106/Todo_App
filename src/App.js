import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem: "",
      });
    }
  }

  deleteItems(id) {
    const list = [...this.state.list];
    const updatelist = list.filter((item) => item.id !== id);
    this.setState({ list: updatelist });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <img
            src="https://img.icons8.com/wired/64/000000/todo-list.png"
            className="logo"
            alt=""
          />
          <div className="NavItem">
            <a href="#"> Menu </a>
            <a href="#"> Home </a>
            <a href="#"> About us </a>
          </div>
        </div>
        <div className="container">
          <h2>Add an List of todo </h2>
          <p>Write your todo...</p>
          <div className="input-bars">
            <input
              type="text"
              placeholder="Please Write.."
              className="input-text"
              required
              value={this.state.newItem}
              onChange={(e) => this.updateInput(e.target.value)}
            />
            <button
              className="add-btn"
              onClick={() => this.addItem(this.state.newItem)}
              disabled={!this.state.newItem.length}
            >
              Add Todo
            </button>
          </div>
          <div className="list">
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="idDone"
                      // checked={item.isDone}
                      onChange={() => {}}
                    />
                    {item.value}
                    <span class="checkmark"></span>
                    <button
                      className="btn"
                      onClick={() => this.deleteItems(item.id)}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </li>
                );
              })}
              <h1>...........</h1>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
