import React, { Component } from 'react';
import { fetchUsers } from '../store';
import { ListView, GridView, Pagination, GridColumn } from '../../../index.js';
import { connect } from 'react-redux';

class ServerComponent extends Component
{
  constructor(props)
  {
    super(props);
    const { dispatch } = props;
    dispatch(fetchUsers(1));
  }

  fetchMore(page)
  {
    const { dispatch } = this.props;
    dispatch(fetchUsers(page));
  }

  render()
  {
    let { users } = this.props;

    return (
      <div>
      <h3>Users</h3>
      <ListView initData={ users } dataSource={ this.fetchMore.bind(this) }>
        <GridView tableClassName="table table-bordered table-response table-hover table-condensed">
          <GridColumn header="#" name="id" />
          <GridColumn header="First Name" name="firstName" />
          <GridColumn header="Last Name" name="lastName" />
          <GridColumn header="Username" name="username" />
          <GridColumn header="Active" name="active" />
        </GridView>
        <Pagination />
      </ListView>
      </div>
    );
  }
}

export default connect(state => state)(ServerComponent);

