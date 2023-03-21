import React from "react";
import axios from "axios";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Name: "",
      Image:
        "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
    };
  }
  resp = async (id) => {
    let Url = "https://reqres.in/api/users/" + id;

    try {
      //console.log(await axios.get(Url));
      let data = await axios.get(Url);
      let response = data.data.data;
      return response;
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };
  getData = async (id) => {
    try {
      let value = await this.resp(id);
      console.log(value);
      this.setState({
        Email: value.email,
        Name: value.first_name + " " + value.last_name,
        Image: value.avatar
      });
    } catch {}
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => this.getData(1)}>1</button>
        <button onClick={() => this.getData(2)} id="2">
          2
        </button>
        <button onClick={() => this.getData(3)} id="3">
          3
        </button>
        <button onClick={() => this.getData(100)} id="100">
          100
        </button>
        <li>Email : {this.state.Email}</li>
        <li>Name : {this.state.Name} </li>
        <img src={this.state.Image} alt="" />
      </div>
    );
  }
}
export default App;
