import React, { Component } from 'react';

class Pagination extends Component
{

  /**
   * Render the component.
   */
  render()
  {
    let pageLinks = [];
    let currentPage = parseInt(this.props.currentPage); // The current page we are on.
    let pagesCount = parseInt(this.props.pagesCount); // The total count of all pages in the database.
    let paginationSpan = parseInt(this.props.pageSpan); // The number of pagination entries to show.
    let changePage = this.props.changePage;
    let disabledClass = this.props.disabledClass || 'disabled';
    let startPos = 2;
    let endPos = startPos + paginationSpan - 1;
    let middlePos = Math.ceil(paginationSpan / 2);

    // Adjust start and end positions to maintain range and keep current page as active.
    if (currentPage >= startPos + 1) {
      startPos = currentPage - middlePos + 1;
      endPos = startPos + paginationSpan - 1;
      if (endPos + 1 > pagesCount) {
        startPos = pagesCount - paginationSpan;
        endPos = pagesCount - 1;
      }
    }

    /*
     * Extra adjustments in case pagination range is larger than results.
     */
    if (startPos < 2) {
      startPos = 2;
    }
    if (endPos >= pagesCount) {
      endPos = pagesCount - 1;
    }

    /*console.log({
      currentPage: currentPage,
      pagesCount: pagesCount,
      paginationSpan: paginationSpan,
      startPos: startPos,
      endPos: endPos,
      middlePos: middlePos,
      changePage: changePage
    });*/

    let identifier = 0;

    const disablePrev = currentPage == 1 ? disabledClass : '';
    const disableNext = pagesCount == currentPage ? disabledClass : '';

    /*
     * Create pagination range.
     */
    pageLinks.push(
      <li className={ disablePrev } key={identifier++} onClick={() => changePage(currentPage - 1)}>
        <a href="#" onClick={(e) => e.preventDefault()} aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
    );

    pageLinks.push(
      <li key={identifier++}
          className={currentPage === 1 ? 'active' : ''}
          onClick={() => changePage(1)}>
        <a href="#" aria-label="1">1</a>
      </li>
    );

    if (startPos > 2) {
      pageLinks.push(
        <li className={ disabledClass } key={identifier++}>
          <a onClick={(e) => e.preventDefault()} aria-label="...">...</a>
        </li>
      );
    }
    for (var i = startPos; i <= endPos; i++) {
      ((i) => {
        pageLinks.push(
          <li key={identifier++} className={ currentPage === i ? 'active' : '' } onClick={() => changePage(i)}>
            <a href="#" onClick={(e) => e.preventDefault()} aria-label={i}>{i}</a>
          </li>
        );
      })(i);
    }
    if (endPos + 1 != pagesCount) {
      pageLinks.push(
        <li className={ disabledClass } key={identifier++}>
          <a aria-label={i + 1}>...</a>
        </li>
      );
    }

    pageLinks.push(
      <li key={identifier++} className={ pagesCount == currentPage ? 'active' : '' } onClick={() => changePage(pagesCount)}>
        <a onClick={(e) => e.preventDefault()} href="#" onClick={(e) => e.preventDefault()} aria-label={ pagesCount }>{ pagesCount }</a>
      </li>
    );

    pageLinks.push(
      <li  className={ disableNext } key={identifier} onClick={() => changePage(currentPage + 1)}>
        <a href="#" onClick={(e) => e.preventDefault()} aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    );

    if (pagesCount < 2) {
      return false; //Dont render anything...
    } else {
      return (
        <nav className={ this.props.wrapperClassName }>
          <ul className="pagination">
            {pageLinks.map((link) =>
              link
            )}
          </ul>
        </nav>
      );
    }

  }
}

Pagination.propTypes = {
  wrapperClassName: React.PropTypes.string,
  disabledClass: React.PropTypes.string,
  currentPage: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  pagesCount: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  pageSpan: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};
Pagination.defaultProps = {
  pageSpan: 2
};

export default Pagination;
