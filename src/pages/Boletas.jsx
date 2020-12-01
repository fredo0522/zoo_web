import React, { Component } from "react";
import axios from 'axios'


const d = new Date();

class Boletas extends Component {
	constructor(props) {
		super(props);

		this.state = {
			kidPrice: 17000,
			adultPrice: 24000,
			carPrice: 8000,
			motorcyclePrice: 4000,
			total: 0,
			fullName: "",
			email: "",
			typeParking: "Ninguna",
			timeVisit: "",
			dateVisit: "",
			ticketsAdult: 0,
			ticketsKid: 0,
			submited: false,
			errorSubmit: false,
		};

		this.handleChangeTypeParking = this.handleChangeTypeParking.bind(this);
		this.handleChangeTicketsAdult = this.handleChangeTicketsAdult.bind(this);
		this.handleChangeTicketsKid = this.handleChangeTicketsKid.bind(this);
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.refDate = React.createRef()
		this.refTime = React.createRef()
		this.refForm = React.createRef()
	}

	handleChangeTypeParking(event) {
		var value = 0;
		// Eliminando el valor anterior
		if (this.state.typeParking === "Carro") {
			value = this.state.carPrice;
		} else if (this.state.typeParking === "Moto") {
			value = this.state.motorcyclePrice;
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

	handleChangeName(event) {
		this.setState({ fullName: event.target.value });
	}

	handleChangeEmail(event) {
		this.setState({ email: event.target.value });
	}

	async handleSubmit(event) {
		
		event.preventDefault();

		let currentDate = this.refDate.current.value.split("-").map((item) => parseInt(item))
		let currentTime = this.refTime.current.value.split(":").map((item) => parseInt(item))
		let finalDate = new Date(currentDate[0], currentDate[1] - 1, currentDate[2], currentTime[0], currentTime[1])

		let ticket = {
			name: 			this.state.fullName,
			date: 			finalDate,
			parking: 		this.state.typeParking,
			email: 			this.state.email,
			adultTickets: 	parseInt(this.state.ticketsAdult),
			kidTickets: 	parseInt(this.state.ticketsKid),
			total: 			parseInt(this.state.total)
		}

		let res = await axios.post("/tickets", ticket)
		if ( res.status === 200 ){
			this.setState({ submited: true });
		}
		else{
			this.setState({ errorSubmit: true });
		}

		setTimeout( ()=>{
			this.setState({submited: false, errorSubmit: false})
		}, 10000 )
		this.refForm.current.reset()
	}

	render() {
		return (
			<div className="container pt-4">
				<h1 className="text-center">Disponibilidad de boleteria</h1>
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
				<h1 className="text-center pt-2 pb-2">Información de tu Reserva</h1>
				<form onSubmit={this.handleSubmit} ref={this.refForm}>
					{/* Notificacion de transaccion */}
					{this.state.submited && (
						<div
							className="toast alert alert-success alert-dismissible fade show fixed-bottom mr-2 ml-auto"
							role="alert"
						>
							<h4 className="alert-heading">Transaccion Realizada</h4>
							<p>
								Se ha hecho la reserva con exito. Gracias {this.state.fullName}.
              				</p>
							<button
								type="button"
								className="close"
								data-dismiss="alert"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
					)}
					{this.state.errorSubmit && (
						<div
							className="toast alert alert-error alert-dismissible fade show fixed-bottom mr-2 ml-auto"
							role="alert"
						>
							<h4 className="alert-heading">Un error ha ocurrido</h4>
							<p>
								Le pedimos disculpas por las molestias, estamos teniendo un error con el servidor.<br/>
								Pongase en contacto con el administrador
              				</p>
							<button
								type="button"
								className="close"
								data-dismiss="alert"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
					)}

					{/* Reserva */}
					<div className="row row-cols-md-3 mt-2">
						<div className="col-sm mb-5">
							<label htmlFor="fullName" className="font-weight-bold">
								Nombre y apellidos
              				</label>
							<input
								type="text"
								aria-label="Nombre y apellidos"
								className="form-control"
								id="fullName"
								onChange={this.handleChangeName}
								required
							/>

							<label htmlFor="fullName" className="font-weight-bold">
								Email
              				</label>
							<input
								type="email"
								aria-label="Email"
								className="form-control"
								id="fullName"
								onChange={this.handleChangeEmail}
								required
							/>

							<label htmlFor="visitDate" className="font-weight-bold">
								Día de la visita
       						</label>
							<input
								type="date"
								id="visitDate"
								className="form-control"
								min={
									d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
								}
								required
								ref={this.refDate}
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
								ref={this.refTime}
							/>

							<label htmlFor="quantityAdults" className="font-weight-bold">
								Número Boletas para Adultos
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
								Número Boletas para Niños
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
								Servicio de Parqueadero
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
							<h2 className="h2 text-left">Total: $ {this.state.total} </h2>
						</div>

						<div className="col-sm mb-5 text-right">
							<button type="submit" className="btn btn-success">
								Reservar Boletas
              				</button>
						</div>
					</div>
				</form>

				<div className="mt-4 mb-5">
					<h1 className="text-center pb-4">
						Ten en cuenta antes de tu visita:
          			</h1>

					<p className="blockquote">
						&#x2022; Recibimos vistantes de todas las edades. Los niños menores
						de 2 años entran gratis.
          			</p>
					<p className="blockquote">
						&#x2022; Aquiere tu boleta en nuestras taquillas o en nuestra página
						web, adquierala para un a hora especifica, como cuando asiste al
						cine, tenemos cupos limitados por hora para asegurar el
						distanciamiento.
          			</p>
					<p className="blockquote">
						&#x2022; Asegurate de llegar dentro de la franja horaria para la
						cual adquiriste la boleta. Tendras 2 horas para disfrutar el
						recorrido.
          			</p>
					<p className="blockquote">
						&#x2022; Algunos lugares tienen una capacidad de carga limitada, es
						posible que no puedas ingredar o debas esperar.
          			</p>
					<p className="blockquote">
						&#x2022; Es posiblibe que en algun momento algun area este
						temporalmente cerrada por procedimientos de bioseguridad o
						desinfeccion.
          			</p>
					<p className="blockquote">
						&#x2022; Debes estar dispuesto a ajustarte a los protocolos en
						beneficio de la bioseguridad de todos.
          			</p>
				</div>
			</div>
		);
	}
}

export default Boletas;
