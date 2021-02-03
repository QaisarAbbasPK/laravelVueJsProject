require('./bootstrap');
window.Vue = require('vue').default;

import HomeComponents from './components/HomeComponent.vue';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
	components: {
		'home-component' : HomeComponents,
	},
    el: '#app',
});
