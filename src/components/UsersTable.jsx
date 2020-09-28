import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
const columns = [
  {
    dataField: "id",
    hidden: true,
  },
  {
    dataField: "first_name",
    text: "First Name",
    sort: true,
  },
  {
    dataField: "last_name",
    text: "Last Name",
    sort: true,
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
  },
  {
    dataField: "ip_address",
    text: "IP Address",
    sort: true,
  },
  {
    dataField: "latitude",
    text: "Latitude",
    sort: true,
  },
  {
    dataField: "longiture",
    text: "Longitude",
    sort: true,
  },
  {
    dataField: "distance",
    text: "Distance",
    sort: true,
  },
];
export class UsersTable extends Component {
  state = { users: [] };

  static getDerivedStateFromProps(props, state) {
    if (props.selected !== state.selected) {
      return {
        selected: props.selected,
      };
    }

    // Return null if the state hasn't changed
    return null;
  }

  componentDidUpdate(prevProps, nextProps) {
    if (prevProps !== this.props) {
      console.log(nextProps);
      this.setState({
        fields: nextProps.fields,
        containerClass: nextProps.containerClass,
      });
    }
  }
  async componentDidMount() {
    fetch("http://localhost:8001/city/London/radius/50")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({ users: res });
      })
      .catch(console.log);
  }
  render() {
    return (
      <BootstrapTable
        keyField="id"
        data={this.state.users}
        columns={columns}
        striped
        hover
        condensed
        pagination={paginationFactory({})}
      />
    );
  }
}

export default UsersTable;
