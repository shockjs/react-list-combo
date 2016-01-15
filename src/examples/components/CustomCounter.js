import React, { Component } from 'react';

class CustomCounter extends Component
{
  /**
   * Render the component.
   */
  render()
  {
    let { totalCount, start, end, label } = this.props;

    return (
      <div>
        { start } - { end } / { totalCount } { label }
      </div>
    );
  }
}

CustomCounter.propTypes = {
  label: React.PropTypes.string,
  start: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  end: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  totalCount: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};
CustomCounter.defaultProps = { };

export default CustomCounter;
