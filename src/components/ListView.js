import React, { Component } from 'react';

class ListView extends Component
{

  constructor(props)
  {
    super(props);
    this.state = this.loadInit();
  }

  loadInit(props=this.props)
  {
    let { perPage=20, dataSource, initData } = props;
    let currentPage = 1;
    let totalCount = 0;
    let currentData = [];

    /*
     * If initData is present check if it is a request or just a dump of data.
     */
    if (initData !== undefined) {
      if (Array.isArray(initData)) {
        // Client side pagination applies.
        totalCount = initData.length;
        currentData = initData;
      }
      else if (initData instanceof Object) {

        let { meta, payload } = initData;
        currentData = payload;

        // If not dataSource is provided then we will handle this client style pagination.
        if (dataSource !== undefined) {
          totalCount = meta.totalCount;
          perPage = meta.perPage;
          currentPage = meta.currentPage;
        } else {
          totalCount = payload.length;
        }
      }
    }

    return {
      currentPage: currentPage,
      totalCount: totalCount,
      perPage: perPage,
      currentData: currentData
    };
  }

  changePage(page)
  {
    if (page === 0 || page > this.getPageCount()) {
      return;
    }
    if (this.props.dataSource) {
      this.props.dataSource(page);
    } else {
      this.setState({currentPage: page});
    }
  }

  getPageCount()
  {
    let { totalCount, perPage } = this.state;
    let pageCount = parseInt(totalCount / perPage);
    pageCount = totalCount % perPage > 0 ? ++pageCount : pageCount;
    return totalCount > 0 ? pageCount : 0;
  }

  componentWillReceiveProps(nextProps)
  {
    this.setState(this.loadInit(nextProps));
  }

  /**
   * Render the component.
   */
  render()
  {
    let componentsWithProps = React.Children.toArray(this.props.children).map((child) => {
      let props = {};
      let { perPage, currentPage, currentData } = this.state;
      switch (child.type.name) {
      case 'GridView':
        let data = currentData;
        if (this.props.dataSource === undefined) {
          let offset = (currentPage - 1) * perPage;
          data = currentData.slice(offset, offset + perPage);
        }

        props = Object.assign(props, {
          currentPage: currentPage,
          currentData: data,
          perPage: perPage
        });

        break;
      case 'Pagination':
        props = Object.assign(props, {
          currentPage: currentPage,
          pagesCount: this.getPageCount(),
          changePage: (page) => this.changePage(page)
        });
        break;
      }
      return React.cloneElement(child, props);
    });

    return (
      <div>{ componentsWithProps }</div>
    );
  }
}

ListView.propTypes = {
  initData: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array
  ]),
  dataSource: React.PropTypes.func,
  perPage: React.PropTypes.number
};
ListView.defaultProps = { };

export default ListView;
