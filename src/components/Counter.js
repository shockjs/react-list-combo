import React, { Component } from 'react';

class Counter extends Component
{

  /**
   * Render the component.
   */
  render()
  {
    let { wrapperClassName, totalCount, currentPage, perPage, label } = this.props;

    currentPage = parseInt(currentPage);

    const start = ((currentPage - 1) * perPage) + 1;
    const end = currentPage * perPage <= totalCount ? currentPage * perPage : totalCount;

    if (React.Children.count(this.props.children) > 0) {
      return (
        <div className={ wrapperClassName }>
          { React.Children.toArray(this.props.children).map((child) => {
            return React.cloneElement(child, { start, end, totalCount, label });
          })}
        </div>
      );
    } else {
      return (
        <div className={ wrapperClassName }>
          { start } to { end } of { totalCount } { label }
        </div>
      );
    }
  }
}

Counter.propTypes = {
  wrapperClassName: React.PropTypes.string,
  label: React.PropTypes.string,
  perPage: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  currentPage: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  totalCount: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};
Counter.defaultProps = {

};

export default Counter;
