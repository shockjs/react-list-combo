import React, { Component } from 'react';
import { ListView, GridView, Pagination, GridColumn } from '../../../index.js';
import { connect } from 'react-redux';

class ClientComponent extends Component
{
  render()
  {
    return (
      <div>
        <h3>Users</h3>
        <ListView initData={ this.props.users } perPage={2}>
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

export default connect(state => state)(ClientComponent);
