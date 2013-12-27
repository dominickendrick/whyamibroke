/* /controllers/usersController.js 
*/
App.transactionsController = Ember.ArrayController.extend({
  sortProperties: ['amount'],
  sortAscending: true // false = descending
});