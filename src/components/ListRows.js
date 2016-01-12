import React, { Component } from 'react';

class ListRows extends Component
{

  /**
   * Render the component.
   */
  render()
  {
    const { currentData, rowClassName } = this.props;

    return (
      <div className={ rowClassName }>
        { currentData.map((row, i) =>
          <div key={i}>
            { React.Children
              .toArray(this.props.children)
              .map(Child => React.cloneElement(Child, { data: row, index: i })) }
          </div>
        )}
      </div>
    );
  }
}

ListRows.propTypes = {
  rowClassName: React.PropTypes.string
};

export default ListRows;