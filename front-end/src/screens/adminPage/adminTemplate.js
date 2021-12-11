import React from "react";
import AdminHeader from "../../components/header/adminHeader";
import AdminSideNave from "../../components/admin/adminSideNave";

export default class AdminTemplate extends React.Component {
	render() {
		return (
			<div class="container-fluid" style={{ backgroundColor: "#F3F3F9" }}>
				<AdminHeader />
				<div class="row flex-nowrap">
					<AdminSideNave />
					<div class="col py-3">{this.props.children}</div>
				</div>
			</div>
		);
	}
}
