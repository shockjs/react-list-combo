import React, { Component } from 'react';

class ListRows extends Component
{

  /**
   * Render the component.
   */
  render()
  {
    return (
      <div>
        { this.rows.map((row, i) =>
          <div key={i}>
            { React.cloneElement(this.props.content, { data: row, index: i }) }
          </div>
        )}
      </div>
    );
  }
}

ListRows.propTypes = {
  content: React.PropTypes.element,
  rows: React.PropTypes.array
};

export default ListRows;