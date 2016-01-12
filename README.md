<img align="right" width="200" alt="reactjs logo" src="http://shockjs.github.io/reactjs.svg">
# react list combo


*A group of isomorphic reactjs components for rendering lists.*

### Installation
```bash
npm install react-list-combo
```

### Documentation

ListView:
```xml
<ListView initData={object|array} dataSource={function} perPage={number}></ListView>
```
  * initData: (required) The initial page of results or all results.
  * dataSource: (optional) Only required for server side pagination. Has a page parameter to specify the next page of results.
  * perPage: (optional) Only required for client side pagination.

ListRows:
```xml
<ListRows rowClassName={string}>{Component}</ListRows>
```
  * rowClassName: (optional) The css class to add to each row.
  * Component: (required) The component to render for each row. parameter passed are data and id.

GridView:
```xml
<GridView tableClassName={string} currentData={array} currentPage={number} perPage={number}></GridView>
```
  * tableClassName: (optional) The class to apply to the table.
  * currentData: (required) The data to show. If nested under ListView it will be provided automatically.
  * currentPage: (required) The currentPage to show. If nested under ListView it will be provided automatically.
  * perPage: (required) The current number of results to show. If nested under ListView it will be provided automatically.

GridColumn:
```xml
<GridColumn header="{string}" name="{string}">{Component}</GridColumn>
```
  * header: (optional) The column header.
  * name: (required) The object key for each row.
  * [Content]: (optional) Can be a custom component to help display the data.

Pagination:
```xml
<Pagination currentPage={number} pagesCount={number} pageSpan={number} changePage={function} />
```
  * currentPage: (required) The current page index. If directly nested under ListView will be provided automatically.
  * pagesCount: (required) The total number of pages. If directly nested under ListView will be provided automatically.
  * pageSpan: (optional - default: 2) The breadth of page numbers to display.
  * changePage: (required) function to execute when pagination is used. If directly nested under ListView will be provided automatically. Callback has page number as a parameter.


### Examples

Bootstrap basic usage. see examples for more info.
```xml
<ListView initData={ users } dataSource={ this.fetchMore.bind(this) }>
  <GridView tableClassName="table table-bordered table-response table-hover table-condensed">
    <GridColumn header="#" name="id" />
    <GridColumn header="First Name" name="firstName" />
    <GridColumn header="Last Name" name="lastName" />
    <GridColumn header="Username" name="username" />
    <GridColumn header="Active" name="active" />
  </GridView>
  <Pagination />
</ListView>
```

Examples are provided in the examples folder. There is an example of both server
and client style pagination that use the same endpoint. The example uses redux.

https://github.com/shockjs/react-list-combo/tree/master/dist/examples

> The MIT License (MIT)

> Copyright (c) 2015 Damian Dennis

> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
