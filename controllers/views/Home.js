import app from '../../app/app.js';
import svgContainer from '../../app/svgContainer.js';

class Home {

    executeHttpRequest(){

        return {

            url: 'views/home.html',
            handler: function() {

                $('main').addClass('homeMain');
                $('main').removeClass('presentationMain');

                let transition = 'stroke-dashoffset 3s ease-in-out';

                //Svg presentation
                let presentation = svgContainer.homePage.presentation();
                app.svg.animateDraw(presentation.paper, presentation.id, transition);

                //Svg realisation
                let realisation = svgContainer.homePage.realisation();
                app.svg.animateDraw(realisation.paper, realisation.id, transition);

                //Svg Projects
                let project = svgContainer.homePage.project();
                app.svg.animateDraw(project.paper, project.id, transition);

                //Svg Contact
                let contact = svgContainer.homePage.contact();
                app.svg.animateDraw(contact.paper, contact.id, transition);

                //Event click for new route
                $('#presentation').on('click', function() {

                    app.mvc.redirectTo('/presentation');

                });

            }

        };

    }

}

export default Home;