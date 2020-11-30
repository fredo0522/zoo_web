import React, { Component } from "react";

const d = new Date();

class Boletas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      kidPrice: 17000,
      adultPrice: 24000,
      carPrice: 8000,
      motorcyclePrice: 4000,
      timeVisit: "",
      dateVisit: "",
      ticketsAdult: 0,
      ticketsKid: 0,
      typeParking: "Ninguna",
    };

    this.handleChangeTypeParking = this.handleChangeTypeParking.bind(this);
    this.handleChangeTicketsAdult = this.handleChangeTicketsAdult.bind(this);
    this.handleChangeTicketsKid = this.handleChangeTicketsKid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTypeParking(event) {
    var value = 0;
    // Eliminando el valor anterior
    if (this.state.typeParking === "Carro") {
      value = this.state.carPrice;
    } else if (this.state.typeParking === "Moto") {
      value = this.state.motorcyclePrice;
    } else {
      value = 0;
    }

    // Agregar el valor al total
    if (event.target.value === "Carro") {
      this.setState({ total: this.state.total + this.state.carPrice - value });
    } else if (event.target.value === "Moto") {
      this.setState({
        total: this.state.total + this.state.motorcyclePrice - value,
      });
    } else {
      this.setState({ total: this.state.total - value });
    }

    this.setState({ typeParking: event.target.value });
  }

  handleChangeTicketsAdult(event) {
    var currValue = this.state.adultPrice * event.target.value;
    var befValue = this.state.adultPrice * this.state.ticketsAdult;

    this.setState({ ticketsAdult: event.target.value });
    this.setState({ total: this.state.total + currValue - befValue });
  }

  handleChangeTicketsKid(event) {
    var currValue = this.state.kidPrice * event.target.value;
    var befValue = this.state.kidPrice * this.state.ticketsKid;

    this.setState({ ticketsKid: event.target.value });
    this.setState({ total: this.state.total + currValue - befValue });
  }

  handleSubmit(event) {}

  render() {
    return (
      <div className="container pt-4">
        {/* Tabla de precios y disponibilidad */}
        <h1 className="text-center">Disponibilidad de boletas</h1>
        <table className="table table-striped table-bordered mt-3">
          <tbody>
            <tr>
              <th scope="row">Horario de Atencion</th>
              <td>9:00 AM - 4:00 PM</td>
            </tr>
            <tr>
              <th scope="row">Tarifa Niños</th>
              <td>$ {this.state.kidPrice}</td>
            </tr>
            <tr>
              <th scope="row">Tarifa Adultos</th>
              <td>$ {this.state.adultPrice}</td>
            </tr>
            <tr>
              <th scope="row">Parqueadero Carro</th>
              <td>$ {this.state.carPrice}</td>
            </tr>
            <tr>
              <th scope="row">Parqueadero Motos</th>
              <td>$ {this.state.motorcyclePrice}</td>
            </tr>
          </tbody>
        </table>

        {/* Total y opciones de compra y datos de la reserva */}
        <form onSubmit={this.handleSubmit}>
          {/* Reserva */}
          <div className="row row-cols-md-3 mt-2">
            <div className="col-sm mb-5">
              <label htmlFor="visitDate" className="font-weight-bold">
                Dia de la visita
              </label>
              <input
                type="date"
                id="visitDate"
                className="form-control"
                min={
                  d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
                }
                required
              />
            </div>
            <div className="col-sm mb-5">
              <label htmlFor="visitTime" className="font-weight-bold">
                Hora de la visita
              </label>
              <input
                type="time"
                className="form-control"
                id="visitTime"
                min="09:00"
                max="16:00"
                required
              />

              <label htmlFor="quantityAdults" className="font-weight-bold">
                Numero Boletas de Adultos
              </label>
              <input
                onChange={this.handleChangeTicketsAdult}
                type="number"
                className="form-control"
                id="quantityAdults"
                min="0"
                max="100"
                required
              />

              <label htmlFor="quantityKids" className="font-weight-bold">
                Numero Boletas de Niños
              </label>
              <input
                onChange={this.handleChangeTicketsKid}
                type="number"
                className="form-control"
                id="quantityKids"
                min="0"
                max="100"
                required
              />
            </div>
            <div className="col-sm mb-5">
              <label htmlFor="parkService" className="font-weight-bold">
                Servicio Parqueadero
              </label>
              <select
                defaultValue={this.state.typeParking}
                onChange={this.handleChangeTypeParking}
                className="form-control"
                id="parkService"
                required
              >
                <option value="Carro">Carro</option>
                <option value="Moto">Moto</option>
                <option value="Ninguna">Ninguna</option>
              </select>
            </div>
          </div>

          {/* Opciones de compra */}
          <div className="row row-cols-md-2 mt-2">
            <div className="col-sm mb-5">
              <h2 className="text-left">Total: $ {this.state.total} </h2>
            </div>

            <div className="col-sm mb-5 text-right">
              <button type="submit" className="btn btn-success">
                Comprar Boletas
              </button>
            </div>
          </div>
        </form>
        <h1 className="text-center">Ten en cuenta antes de tu visita:</h1>
      </div>
    );
  }
}

export default Boletas;
