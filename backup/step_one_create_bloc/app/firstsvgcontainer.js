import app from "./app.js";

let svgContainer = {

    //HomePage SVG
    homePage: {

        //Presentation SVG
        presentation: function(){

            //Path creation and attributes set
            let presentationPath = app.svg.createPath('presentation', 840, 420, "M 840,420 L 840,0 L 0,0 L 0,420 L 840,420");
            presentationPath.svgPath.attr({

                'stroke-width': 4,
                stroke: '#FE4F00',
                'stroke-dasharray': [''],

            });

            //Text creation and attributes set
            let presentationText = presentationPath.paper.text(440, 210, 'Presentation');
            presentationText.attr({

                'font-family': 'Clip',
                'font-size': 40,
                fill: 'black',

            });

            //We return the id and the node svg for set the animation
            return{

                id: presentationPath.svgPath.id,
                paper: presentationPath.paper,

            };

        },

        realisation: function() {

            let realisationPath = app.svg.createPath('realisation', 840, 420, "M 0,420 L 0,0 L 840,0 L 840,420 L 0,420");
            realisationPath.svgPath.attr({

                'stroke-width': 4,
                stroke: '#D9A4FC',
                'stroke-dasharray': [''],

            });

            let realisationText = realisationPath.paper.text(440, 210, 'Réalisation');
            realisationText.attr({

                'font-family': 'Clip',
                'font-size': 40,
                fill: 'black',

            });

            return{

                id: realisationPath.svgPath.id,
                paper: realisationPath.paper,

            };


        },

        project: function() {

            let projectPath = app.svg.createPath('project', 840, 420, "M 840,0 L 840,420 L 0,420 L 0,0 L 840,0");
            projectPath.svgPath.attr({

                'stroke-width': 4,
                stroke: '#FE003E',
                'stroke-dasharray': [''],

            });

            let projectText = projectPath.paper.text(440, 210, 'Projets');
            projectText.attr({

                'font-family': 'Clip',
                'font-size': 40,
                fill: 'black',

            });

            return{

                id: projectPath.svgPath.id,
                paper: projectPath.paper,

            };


        },

        contact: function() {

            let contactPath = app.svg.createPath('contact', 840, 420, "M 0,0 L 0,420 L 840,420 L 840,0 L 0,0");
            contactPath.svgPath.attr({

                'stroke-width': 4,
                stroke: '#FFB41D',
                'stroke-dasharray': [''],

            });

            let contactText = contactPath.paper.text(440, 210, 'Contact');
            contactText.attr({

                'font-family': 'Clip',
                'font-size': 40,
                fill: 'black',

            });

            return{

                id: contactPath.svgPath.id,
                paper: contactPath.paper,

            };


        }

    },

    presentation: {

        header: function () {

            let headerPath = app.svg.createPath('presentationHeader', 1740, 150, 'M 1740,0 L 1740,150 L 0,150 L 0,70 L 990,70 L 1010,45');
            headerPath.svgPath.attr({

                'stroke-width': 3,
                stroke: '#FE4F00',
                'stroke-dasharray': [''],

            });

            let headerText = app.svg.createText(headerPath.paper, 875, 45, 'Presentation', '#FE4F00', '1', '40', 'Clip');

            //Return Home Button
            let button = app.svg.createHomeButton(headerPath.paper, '#FE4F00');

            //Return in addition the Object Text and the Button for animation
            return{

                id: headerPath.svgPath.id,
                paper: headerPath.paper,
                content: headerText,
                button: button,

            };

        },

        progressBar: function() {

            let primaryColor = '#FE4F00';
            let secondaryColor = '#FF7739';
            let tertiaryColor = '#FF9D71';
            let backgroundColor = 'black';

            //Create a defs linear gradient
            let linearGradient =
                `<linearGradient id="gradientPath" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="`+primaryColor+`"/>
                    <stop offset="40%" stop-color="`+secondaryColor+`"/>
                    <stop offset="60%" stop-color="`+tertiaryColor+`"/>
                </linearGradient>`;

            let progressBarPath = app.svg.createPath('presentationProgressBar', 1740, 300, 'M 0,300 L 1710,300 L 1740,275');
            progressBarPath.paper.defs.innerHTML = linearGradient;
            progressBarPath.svgPath.attr({

                'stroke-width': 3,
                'stroke-dasharray': [''],

            });

            //Apply the gradient
            progressBarPath.svgPath[0].style.stroke = 'url(#gradientPath)';

            //Create an object with all circle and sub path of ProgressBar Box
            let progressBarObject = {

                htmlBgProgressBar : app.svg.createCircle(progressBarPath.paper, 160, 150, 110, backgroundColor, 2).rotate(-90, 160, 150),
                htmlProgressBar : app.svg.createCircle(progressBarPath.paper, 160, 150, 110, primaryColor, 2).rotate(-90, 160, 150),
                htmlSubPath : app.svg.createAdditionalPath(progressBarPath.paper, 'M 40,300 L 70,275 L 230,275 L 260,250', primaryColor, 3),
                cssBgProgressBar : app.svg.createCircle(progressBarPath.paper, 520,150, 110, backgroundColor, 2).rotate(-90, 520, 150),
                cssProgressBar : app.svg.createCircle(progressBarPath.paper, 520,150, 110, primaryColor, 2).rotate(-90, 520, 150),
                sassBgProgressBar : app.svg.createCircle(progressBarPath.paper, 520,150, 100, backgroundColor, 2).rotate(-90, 520, 150),
                sassProgressBar : app.svg.createCircle(progressBarPath.paper, 520,150, 100, secondaryColor, 2).rotate(-90, 520, 150),
                cssSubPath : app.svg.createAdditionalPath(progressBarPath.paper, 'M 400,300 L 430,275 L 590,275 L 620,250', primaryColor, 3),
                javascriptBgProgressBar : app.svg.createCircle(progressBarPath.paper, 870,150, 110, backgroundColor, 2).rotate(-90, 870, 150),
                javascriptProgressBar : app.svg.createCircle(progressBarPath.paper, 870,150, 110, primaryColor, 2).rotate(-90, 870, 150),
                es2015BgProgressBar : app.svg.createCircle(progressBarPath.paper, 870,150, 100, backgroundColor, 2).rotate(-90, 870, 150),
                es2015ProgressBar : app.svg.createCircle(progressBarPath.paper, 870,150, 100, secondaryColor, 2).rotate(-90, 870, 150),
                nodeBgProgressBar : app.svg.createCircle(progressBarPath.paper, 870,150, 90, backgroundColor, 2).rotate(-90, 870, 150),
                nodeProgressBar : app.svg.createCircle(progressBarPath.paper, 870,150, 90, tertiaryColor, 2).rotate(-90, 870, 150),
                javascriptSubPath : app.svg.createAdditionalPath(progressBarPath.paper, 'M 750,300 L 780,275 L 940,275 L 970,250', secondaryColor, 3),
                phpBgProgressBar : app.svg.createCircle(progressBarPath.paper, 1220,150, 110, backgroundColor, 2).rotate(-90, 1220, 150),
                phpProgressBar : app.svg.createCircle(progressBarPath.paper, 1220,150, 110, primaryColor, 2).rotate(-90, 1220, 150),
                laravelBgProgressBar : app.svg.createCircle(progressBarPath.paper, 1220,150, 100, backgroundColor, 2).rotate(-90, 1220, 150),
                laravelProgressBar : app.svg.createCircle(progressBarPath.paper, 1220,150, 100, secondaryColor, 2).rotate(-90, 1220, 150),
                symfonyBgProgressBar : app.svg.createCircle(progressBarPath.paper, 1220,150, 90, backgroundColor, 2).rotate(-90, 1220, 150),
                symfonyProgressBar : app.svg.createCircle(progressBarPath.paper, 1220,150, 90, tertiaryColor, 2).rotate(-90, 1220, 150),
                phpSubPath : app.svg.createAdditionalPath(progressBarPath.paper, 'M 1100,300 L 1130,275 L 1290,275 L 1320,250', tertiaryColor, 3),
                sqlBgProgressBar : app.svg.createCircle(progressBarPath.paper, 1570,150, 110, backgroundColor, 2).rotate(-90, 1570, 150),
                sqlProgressBar : app.svg.createCircle(progressBarPath.paper, 1570,150, 110, primaryColor, 2).rotate(-90, 1570, 150),
                noSqlBgProgressBar : app.svg.createCircle(progressBarPath.paper, 1570,150, 100, backgroundColor, 2).rotate(-90, 1570, 150),
                noSqlProgressBar : app.svg.createCircle(progressBarPath.paper, 1570,150, 100, secondaryColor, 2).rotate(-90, 1570, 150),
                sqlSubPath : app.svg.createAdditionalPath(progressBarPath.paper, 'M 1450,300 L 1480,275 L 1640,275 L 1670,250', tertiaryColor, 3),

            };

            let progressBarObjectText = {

                htmlText: app.svg.createText(progressBarPath.paper, 160, 150, 'HTML', primaryColor, 1, 20, 'Orbitron'),
                cssText: app.svg.createText(progressBarPath.paper, 520, 130, 'CSS', primaryColor, 1, 20, 'Orbitron'),
                sassText: app.svg.createText(progressBarPath.paper, 520, 170, 'SASS', secondaryColor, 1, 20, 'Orbitron'),
                javascriptText: app.svg.createText(progressBarPath.paper, 870, 110, 'JS', primaryColor, 1, 20, 'Orbitron'),
                es2015Text: app.svg.createText(progressBarPath.paper, 870, 150, 'ES 2015', secondaryColor, 1, 20, 'Orbitron'),
                nodeText: app.svg.createText(progressBarPath.paper, 870, 190, 'NODE', tertiaryColor, 1, 20, 'Orbitron'),
                phpText: app.svg.createText(progressBarPath.paper, 1220, 110, 'PHP', primaryColor, 1, 20, 'Orbitron'),
                laravelText: app.svg.createText(progressBarPath.paper, 1220, 150, 'LARAVEL', secondaryColor, 1, 20, 'Orbitron'),
                symfonyText: app.svg.createText(progressBarPath.paper, 1220, 190, 'SYMFONY', tertiaryColor, 1, 20, 'Orbitron'),
                sqlText: app.svg.createText(progressBarPath.paper, 1570, 130, 'SQL', primaryColor, 1, 20, 'Orbitron'),
                noSqlText: app.svg.createText(progressBarPath.paper, 1570, 170, 'NOSQL', secondaryColor, 1, 20, 'Orbitron'),

            };

            return {

                id: progressBarPath.svgPath.id,
                paper: progressBarPath.paper,
                progressBarObject: progressBarObject,
                progressBarObjectText : progressBarObjectText

            };

        },

        skill: function () {

            let skillPath = app.svg.createPath('presentationSkill', 1740, 50, 'M 0,25 L 40,25 L 70,50 L 1710,50 L 1740,25');
            skillPath.svgPath.attr({

                'stroke-width': 3,
                stroke: '#FE4F00',
                'stroke-dasharray': [''],

            });

            let skillText = app.svg.createText(skillPath.paper, 910, 25, 'Autres Compétences : SVG, RaphaelJS, BabylonJS, InkScape, GitKraken, Ajax, JQuery', '#FE4F00', 1, 20, 'Jura');

            //Return in addition the Object Text and the Button for animation
            return{

                id: skillPath.svgPath.id,
                paper: skillPath.paper,
                content: skillText

            };

        },

        info : function () {

            let primaryColor = '#FE4F00';

            let infoPath = app.svg.createPath('presentationInfo', 1740, 400, 'M 68,0 L 98,25 L 98,375 L 128,400 L 796,400 L 826,375');
            infoPath.svgPath.attr({

                'stroke-width': 3,
                stroke: primaryColor,
                'stroke-dasharray': [''],

            });

            let infoPathObject = {

                careerPath: app.svg.createAdditionalPath(infoPath.paper, 'M 972,0 L 1002,25 L 1002,375 L 1032,400 L 1710,400 L 1740,375', primaryColor, 3),
                whoIAmTitleSubPath: app.svg.createAdditionalPath(infoPath.paper, 'M 98,25 L 128,50 L 796,50 L 826,25', primaryColor, 3),
                careerTitleSubPath: app.svg.createAdditionalPath(infoPath.paper, 'M 1002,25 L 1032,50 L 1710,50 L 1740,25', primaryColor, 3),
                cvButton: app.svg.createAdditionalPath(infoPath.paper, 'M 1296,275 L 1446,275 L 1446,325 L 1296,325 L 1296,275', primaryColor, 2)

            };

            let infoTextObject = {

                whoIAmTitle: app.svg.createText(infoPath.paper, 462, 25, 'Qui suis-je ?', primaryColor, 1, 20, 'Jura'),
                careerTitle: app.svg.createText(infoPath.paper, 1371, 25, 'Mon Parcours', primaryColor, 1, 20, 'Jura'),
                whoIAmFirstRow: app.svg.createText(infoPath.paper, 462, 150, '• Passionné d\'informatique et débutant en 2017 (pour les gens du futur) dans le Web.', primaryColor, 1, 15, 'Jura'),
                whoIAmSecondRow: app.svg.createText(infoPath.paper, 462, 200, '• Mais aussi de Jeux-Vidéo et particulièrement du Speedrun.', primaryColor, 1, 15, 'Jura'),
                whoIAmThirdRow: app.svg.createText(infoPath.paper, 462, 250, '• Je souhaite perdurer dans cette nouvelle voie.', primaryColor, 1, 15, 'Jura'),
                whoIAmFourthRow: app.svg.createText(infoPath.paper, 462, 300, '•  Je suis donc à votre disposition pour réaliser vos projets web.', primaryColor, 1, 15, 'Jura'),
                careerFirstRow: app.svg.createText(infoPath.paper, 1371, 150, '• Cuisinier durant 14 ans', primaryColor, 1, 15, 'Jura'),
                careerSecondRow: app.svg.createText(infoPath.paper, 1371, 200, '• Diplôme d\' Intégrateur & Développeur d\'application Web RNCP Niv 3 à la 3W Academy', primaryColor, 1, 15, 'Jura'),
                careerThirdRow: app.svg.createText(infoPath.paper, 1371, 250, '• Formation de Développeur d\'application Web et Mobile RNCP Niv 4 à la 3W Academy', primaryColor, 1, 15, 'Jura'),
                careerFourthRow: app.svg.createText(infoPath.paper, 1371, 300, '• Voir mon CV', primaryColor, 1, 15, 'Jura'),

            };

            let object = infoPath.paper.set();
            object.push(

                infoTextObject.careerFourthRow,
                infoPathObject.cvButton

            );

            object.attr({

                fill: '#16161D',
                cursor: 'pointer',

            });

            object.click(function () {

                console.log('cv');

            });

            return {

                id: infoPath.svgPath.id,
                paper: infoPath.paper,
                infoPathObject: infoPathObject,
                infoTextObject: infoTextObject

            };


        }

    },

};

export default svgContainer;