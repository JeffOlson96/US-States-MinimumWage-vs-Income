import React, {Component} from 'react';
import USAMap from 'react-usa-map';
import './App.css';
import states from "./minimum-wage.json";
import StatePopup from "./StatePopup.js";

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: states,
      showpopup: false,
      cur_name: "",
      cur_MW: null,
      cur_LW: null
    };

    //this.GetData = this.GetData.bind(this);
  }
  
  mapHandler = (event) => {
    //alert(event.target.dataset.name);
    this.state.data.forEach((value, index) => {
      if (value.Abrv === event.target.dataset.name) {
        // this is where we can hopefully create the popup component        
        this.setState({
          showpopup: true,
          cur_name: value.State,
          cur_MW: value.MinimumWage,
          cur_LW: value.LivingWage
        });
      }
    })
  };


  /*
  GetData() {
    //console.log(this.state.data);
    this.state.data.forEach((value, index) => {
      console.log(value.Abrv);
    })
  }
  */


  render() {
    return(
      <div className="Map">
        <USAMap onClick={this.mapHandler} />
        {this.state.showpopup ? 
          <StatePopup
            Name={this.state.cur_name}
            MinWage={this.state.cur_MW}
            LivingStandard={this.state.cur_LW}
          />
          : null
        }
      </div>
    )
  }
}


export default App;
