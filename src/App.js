import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    response: []
  };

  teste = function () {
    this.callApi()
      .then(res => this.setState({ response: res.vehicles }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/vehicles.json');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="App no-padding no-margin">
        <div className="col-sm-12 no-padding no-margin">{this.body}</div>
        <div className="row col-sm-12 no-padding no-margin">
          <div className="col-sm-3 new-sidebar-dark no-margin p-10" style={{ height: '50px', textAlign: 'left' }}>
            <div className="color-white">Vehicles</div>
          </div>
          <div className="col-sm-9 new-sidebar no-padding no-margin" style={{ height: '50px' }}></div>
        </div>
        <div className="row col-sm-12 no-padding no-margin">
          <div className="col-sm-3 no-padding no-margin new-sidebar">
            <ul className="side-nav p-10 no-margin" style={{ textAlign: "left" }}>
              <li style={{ listStyleType: "none" }} className="action-style">Actions</li>
              <li style={{ listStyleType: "none" }}><a className="color-white" href="http://localhost:8765/vehicles">Veículos</a></li>
              <li style={{ listStyleType: "none" }}><a className="color-white" href="http://localhost:8765/brands">Marcas</a></li>
            </ul>
          </div>
          <div className="col-sm-9 no-padding no-margin">
            {
              this.state.response.map((vehicle, index) => (<ul className="gray-border p-10" style={{ textAlign: "center", padding: 0, margin: 20 }} key={index}>
                <li style={{ listStyleType: "none", textAlign: "left" }}><img src={vehicle.brand.brandLogo} style={{ height: '30px' }}></img></li>
                <li className="border-bottom m-b-5" style={{ listStyleType: "none" }}>{vehicle.brand.brandName} - {vehicle.modelName}</li>
                <li className="border-bottom m-b-5" style={{ listStyleType: "none" }}><img src={vehicle.modelImage}></img></li>
                <li className="border-bottom m-b-5 row col-sm-12" style={{ listStyleType: "none" }}>
                  <div className="row col-sm-6 no-padding no-margin">
                    <label className="col-sm-4 no-padding no-margin">
                      Ano de fabricação:
                    </label>
                    <div className="col-sm-8 no-padding no-margin">{vehicle.yearFabrication}</div>
                  </div>
                  <div className="row col-sm-6 no-padding no-margin">
                    <label className="col-sm-4 no-padding no-margin">
                      Ano do modelo:
                    </label>
                    <div className="col-sm-8 no-padding no-margin">{vehicle.yearModel}</div>
                  </div>
                </li>
              </ul>
              )
              )
            }
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.teste();
  };
}
export default App;