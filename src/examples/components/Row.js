import React, { Component } from 'react';

class Row extends Component
{
  /**
   * Render the component.
   */
  render()
  {
    return (
      <div>
        <span>
          <img src="https://unsplash.it/100/100" />
        </span>
        <span>{ this.props.data.firstName } { this.props.data.lastName }</span>
      </div>
    );
  }
}

Row.propTypes = {
  index: React.PropTypes.number,
  data: React.PropTypes.object
};
Row.defaultProps = { };

export default Row;
