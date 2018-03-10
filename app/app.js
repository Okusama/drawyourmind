let app = {

    /*Router MVC*/
    mvc: {
        /**
         * Create a path for the router
         * @param controller Controller Instance
         */
        dispatchRoute: function(controller) {

                // Execute the principal code of controller.
                let view = controller.executeHttpRequest();

                // Check if the controllers send an object view available.
                if(view === Object(view) && view.handler && view.url) {

                    // Execute a HTTP GET request for retrieve the view.
                    let promise = window.fetch(view.url, { method: 'GET' });

                    // Execute the Promise created by the HTTP GET request.
                    promise.then(function(response) {

                        // Creating a promise with HTTP response content.
                        return response.text();

                    }).then(function(html) {

                        // Insertion in DOM the HTTP response.
                        $('main').html(html);

                        // Execute the administrator view's.
                        view.handler();

                    });
                }
            },

        /**
         * Redirect to the url
         * @param url Url set in router
         */
        redirectTo: function(url) {

                // Request the router to load a new route.
                app.mvc.router.navigateTo(url);

            },


            // Instance of the Router class of the vanilla-router.js library
            router: null

        },

    svg: {

        /**
         *  Create Raphael object with a path
         * @param coord String of coordinate of path
         * @returns {{svgPath}} SvgPath : path object
         */
        createPath: function(paper, coord, ...params) {

            console.log(paper.path(coord));
            // Path coordinates
            let svgPath = paper.path(coord);

            svgPath.attr({

                'stroke-width': params.sWidth,
                stroke: params.sColor,
                'stroke-dasharray': [''],

            });

            //Return the node Path
            return svgPath;

        },

        /**
         * Drawing animation for path and shape
         * @param paper SVG Box
         * @param pathId Object id to animate
         * @param transition Transition settings
         */
        animateDraw: function(paper, pathId, transition) {

            //Recover the path with its ID and we calculate its length in pixel
            let path = paper.getById(pathId);
            let length = path.getTotalLength();

            //Set the starting position
            path.node.style.strokeDasharray = length + ' ' + length;
            path.node.style.strokeDashoffset = length;

            //Take the size of the element in relation to its viewPort
            path.node.getBoundingClientRect();

            //Apply the transition
            path.node.style.transition = transition;

            //Launch the transition
            path.node.style.strokeDashoffset = '0';

        },

        /**
         * Drawing animation for text who need animation, no transition like a path
         * @param paper Svg Box
         * @param pathId Text id
         * @param length Length of path
         * @param time Time for animation
         */
        animateText: function(paper, pathId, length, time) {

            let text = paper.getById(pathId);

            text.node.style.strokeDasharray = length;
            text.node.style.strokeDashoffset = length;

            //Animation with the keyframe drawText in SASS file
            text.node.style.animation = 'drawText ' + time + ' forwards';

        },

        /**
         *  Create the button Return Home
         * @param paper Svg box
         * @param color Color for shape
         */
        createHomeButton: function(paper, color) {

            //Create shape
            let circle = paper.circle(1700, 40, 20);
            let pathOne = paper.path('M 1700,30 L 1700,50');
            let pathTwo = paper.path('M 1690,40 L 1710,40');

            circle.rotate(-90, 1700, 40);
            pathOne.rotate(45, 1700, 40);
            pathTwo.rotate(45, 1700, 40);

            circle.attr({

                fill: 'transparent',


            });

            //Create object for set common attribute
            let object = paper.set();
            object.push(

                circle,
                pathOne,
                pathTwo

            );

            object.attr({

                stroke: color,
                'stroke-width': 2,
                cursor: 'pointer',

            });

            //Event on click redirect to Home
            object.click(function() {

                app.mvc.redirectTo('/');

            });

            return object;

        },

        /**
         * Button Draw animation
         * @param svg SVG BOX
         * @param transition Transition CSS
         */
        animateButton: function(svg, transition) {

            app.svg.animateDraw(svg.paper ,svg.button[0].id, transition);
            app.svg.animateDraw(svg.paper ,svg.button[1].id, transition);
            app.svg.animateDraw(svg.paper ,svg.button[2].id, transition);

        },

        /**
         *
         * @param paper SVG Box
         * @param x X position
         * @param y Y position
         * @param text String Text
         * @param color Color Text
         * @param sWidth Stroke Width
         * @param fSize Font Size
         * @param fFamily Font Family
         * @returns {*}
         */
        createText: function(paper, x, y, text, color, sWidth, fSize, fFamily) {

            text = paper.text(x, y, text);
            text.attr({

                'font-family': fFamily,
                'font-size': fSize,
                'stroke-width': sWidth,
                stroke: color,
                fill: 'transparent',

            });

            return text;

        },

        /**
         * Create a Raphael circle
         * @param paper SVG BOX
         * @param x X Position
         * @param y Y Position
         * @param radius Circle Radius
         * @param color Circle Color
         * @param sWidth Circle Stoke Width
         */
        createCircle: function(paper, x, y, radius, color, sWidth) {

            let circle = paper.circle(x, y, radius);
            circle.attr({

                stroke: color,
                'stroke-width': sWidth,

            });

            return circle;

        },

        /**
         * Create an other path in a SVG BOX
         * @param paper SVG BOX
         * @param coords Cordinate of
         * @param color
         * @param sWidth
         */
        createAdditionalPath : function (paper, coords, color, sWidth) {

            let path = paper.path(coords);
            path.attr({

                stroke: color,
                'stroke-width': sWidth,
                'stroke-dasharray': [''],

            });

            return path;

        },

        /**
         *
         * @param paper
         * @param pathId
         * @param transition
         * @param percent
         */
        animateProgressBar: function(paper, pathId, transition, percent) {

            //Recover the path with its ID and we calculate its length in pixel
            let path = paper.getById(pathId);

            let radius = path.attr("r");
            let grith = Math.PI*(radius*2);

            let length = (grith * percent)/100;

            //Set the starting position
            path.node.style.strokeDasharray = length + ' ' + grith;
            path.node.style.strokeDashoffset = length;

            //Take the size of the element in relation to its viewPort
            path.node.getBoundingClientRect();

            //Apply the transition
            path.node.style.transition = transition;

            //Launch the transition
            path.node.style.strokeDashoffset = '0';


        },

    }

};

// The application is exported to be accessible by other modules.
export default app;