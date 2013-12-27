/* /routes/transcationsRoute.js 
*/
App.TransactionsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('transaction');
  }
});