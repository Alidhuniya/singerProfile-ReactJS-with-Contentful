import React, { Fragment, Component } from "react";
import { Client } from "./../Client";

export default class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			section: "",
		};
	}

	componentDidMount() {
		Client.getEntry("3VhrFwooIpqpHDuZTZ2axF")
			.then((response) => {
				const data = response.fields;
				console.log(data);

				this.setState({
					section: data,
				});
			})

			.catch(console.error);
		
	}

	render() {
		const view = this.state.section;
		// console.log(view);
		const { heading, testin2, menuheadings } = view;
		return (
			<Fragment>
				<section className="sidebar">
					<div className="sidebar__block">
						<div className="sidebar__contents">
							<h1>{heading}</h1>
							<h3>{testin2}</h3>
							<h2>{}</h2>
						</div>
					</div>
				</section>
			</Fragment>
		);
	}
}
