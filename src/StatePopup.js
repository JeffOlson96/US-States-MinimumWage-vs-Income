import React, {Component} from 'react';
import './StatePopup.css';



class StatePopup extends Component {
	constructor() {
		super();
		this.state = {
			Name: "",
			MinWage: null,
			LivingStandard: null,
			AvgYearlyIncome: null
		};

		this.CalcYearlyIncome = this.CalcYearlyIncome.bind(this);
	}

	componentDidMount() {
		//this.CalcYearlyIncome(this.state.MinWage);
	}

	CalcYearlyIncome(wage) {
		//console.log(wage);
		var avg_hrs = 40;
		var wksinyear = 52;
		var yearlyincome = (wage * avg_hrs) * wksinyear;
		console.log(yearlyincome);
		return(yearlyincome);
	}

	render() {
		//CalcYearlyIncome(this.props.MinWage);
		return(
			<div className="popup">
				<div className="popup-inner">
					<div className="popup-header">
						<h2>State Info</h2>
						<h3>{"State Name: " + this.props.Name}</h3>
					</div>
					<p>{"Minimum Wage: " + "$" + this.props.MinWage}</p>
					<p>{"Average Yearly Income: " + "$" + this.CalcYearlyIncome(this.props.MinWage)}</p>
					<p>{"Average Living Income: " + "$" + this.props.LivingStandard}</p>

				</div>
			</div>
		)
	}
}


export default StatePopup;