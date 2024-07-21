import React from "react";

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="container d-flex justify-content-center">
				<div className="card mt-5 w-50">
					<div className="card-body">
						<form>
							<div className="form-group">
								<label htmlFor="userCpf">CPF</label>
								<input
									type="text"
									className="form-control"
									id="userCpf"
									placeholder="Usuário"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password">Senha</label>
								<input
									type="password"
									className="form-control"
									id="password"
									placeholder="Senha"
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Entrar
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
