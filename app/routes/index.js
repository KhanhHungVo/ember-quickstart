
// Ember.Route.extend({
//     beforeModel: function() {
//         debugger
//         this.replaceWith('rentals');
//     }
// })

import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel: function() {
        debugger
        this.replaceWith('rentals');
    }
})