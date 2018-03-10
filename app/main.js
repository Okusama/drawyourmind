import app from './app.js';

//Controllers Pages
import Home from '../controllers/views/Home.js';
import Presentation from '../controllers/views/Presentation.js';

/**
 * Initialize all path
 */
function initializeRouter() {

    //Initialise router
    app.mvc.router = new Router({

        mode: 'hash',
        root: '/index.html'

    });

    //Home path
    app.mvc.router.add('/', function(){

        app.mvc.dispatchRoute(new Home());

    });

    //Presentation path
    app.mvc.router.add('/presentation', function(){

        app.mvc.dispatchRoute(new Presentation());

    });

    //Router activation
    app.mvc.router.check()
        .addUriListener();

}

$(document).ready(function() {

    //Launch router
    initializeRouter();

});