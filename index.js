const ListView = require('./dist/components/ListView');
const GridView = require('./dist/components/GridView');
const GridColumn = require('./dist/components/GridColumn');
const Pagination = require('./dist/components/Pagination');
const ListRows = require('./dist/components/ListRows');
const Counter = require('./dist/components/Counter');

module.exports = {
  ListRows: ListRows.default,
  ListView: ListView.default,
  GridView: GridView.default,
  GridColumn: GridColumn.default,
  Pagination: Pagination.default,
  Counter: Counter.default
};