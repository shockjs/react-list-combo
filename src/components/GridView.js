import React, { Component } from 'react';

class GridView extends Component
{
  /**
   * Render the component.
   */
  render()
  {
    // Only GridColumns are valid components.
    let grids = React.Children.toArray(this.props.children).filter((child) => {
      return child.type.name === 'GridColumn';
    });

    // Fetch headers.
    let headers = grids.map((grid) => {
      return grid.props.header || '&nbsp;';
    });

    // Fetch column names or component to be used.
    let colNames = grids.map((grid) => {
      if (React.Children.count(grid.props.children) > 0) {
        return React.Children.toArray(grid.props.children).map((child) => {
          return React.cloneElement(child, { name: grid.props.name });
        });
      } else {
        return grid.props.name || '&nbsp;';
      }
    });

    let rows = this.props.currentData.map((data) => {
      return colNames.map((row) => {
        switch (typeof row) {
        case "string":
          return data[row]; // Column name provided.
        default: // Provided a component.
          return React.Children.toArray(row).map((child) => {
            return React.cloneElement(child, {
              data: data[child.props.name],
              row: data
            });
          });
        }
      });
    });

    return (
      <table className={tableClassName}>
        <thead>
          <tr>
          { headers.map((header, i) =>
            <th key={i}>{ header }</th>
          )}
          </tr>
        </thead>
        <tbody>
          { rows.map((row, i) =>
          <tr key={i}>
            { row.map((col, j) =>
              <td key={j}>
                { col }
              </td>
            )}
          </tr>
          )}
        </tbody>
      </table>
    );
  }
}

GridView.propTypes = { };
GridView.defaultProps = { };

export default GridView;
