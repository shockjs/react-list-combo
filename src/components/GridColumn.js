import React, { Component } from 'react';

class GridColumn extends Component
{

  /**
   * Render the component.
   */
  render()
  {
    return (
      <td>
        { this.props.children }
      </td>
    );
  }
}

export default GridColumn;
