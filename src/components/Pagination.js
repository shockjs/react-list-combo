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

    /*
     * Create pagination range.
     */
    pageLinks.push(
      <li key={identifier++} onClick={() => changePage(currentPage - 1)}>
        <a aria-label="Previous">
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
        <li key={identifier++}>
          <a className={ disabledClass } aria-label="...">...</a>
        </li>
      );
    }
    for (let i = startPos; i <= endPos; i++) {
      ((i) => {
        pageLinks.push(
          <li key={identifier++} className={ currentPage === i ? 'active' : '' } onClick={() => changePage(i)}>
            <a href="#" aria-label={i}>{i}</a>
          </li>
        );
      })(i);
    }
    if (endPos + 1 != pagesCount) {
      pageLinks.push(
        <li key={identifier++}>
          <a className={ disabledClass } aria-label={i + 1}>...</a>
        </li>
      );
    }

    pageLinks.push(
      <li key={identifier++} className={ pagesCount == currentPage ? 'active' : '' } onClick={() => changePage(pagesCount)}>
        <a href="#" aria-label={ pagesCount }>{ pagesCount }</a>
      </li>
    );

    pageLinks.push(
      <li key={identifier} onClick={() => changePage(currentPage + 1)}>
        <a href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    );

    if (pagesCount < 2) {
      return false; //Dont render anything...
    } else {
      return (
        <nav>
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
