/* /models/transaction.js
*/
App.Transaction = DS.Model.extend({
  ammount      : DS.attr(),
  currency     : DS.attr(),
  vendor        : DS.attr(),
  creationDate : DS.attr()
});


App.Transaction.FIXTURES = [{
  id: 1,
  ammount      : 123.456,
  currency     : 'GBP',
  vendor        : 'The Easton',
  creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
}, {
  id: 2,
  ammount      : 223.456,
  currency     : 'GBP',
  vendor        : 'The Easton',
  creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
}];