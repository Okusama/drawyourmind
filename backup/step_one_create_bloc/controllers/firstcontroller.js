import svgContainer from "../../../app/svgContainer";
import app from "../../../app/app";
import CreateBlockSvg from "../../../app/CreateBlockSvg";

class Presentation {

    executeHttpRequest(){

        return {

            url: 'views/presentation.html',
            handler: function() {

                //Set the CSS class for page
                $('main').removeClass('homeMain');
                $('main').addClass('presentationMain');

                $.getJSON('./data/presentationData.json', function (data){

                    let createHeader = new CreateBlockSvg(data.presentationData.xl.header);

                    console.log(createHeader);

                });

                //Transition for path
                let transition = 'stroke-dashoffset 3s ease-in-out';

                //SVG Header
                let presentationHeader = svgContainer.presentation.header();
                app.svg.animateDraw(presentationHeader.paper, presentationHeader.id, transition);

                //SVG Skill
                let presentationSkill = svgContainer.presentation.skill();
                app.svg.animateDraw(presentationSkill.paper, presentationSkill.id, transition);

                //SVG Info
                let presentationInfo = svgContainer.presentation.info();
                app.svg.animateDraw(presentationInfo.paper, presentationInfo.id, transition);

                //Button return HomeAnimation
                app.svg.animateButton(presentationHeader, transition);

                //Animation for header text & skill text
                presentationHeader.content.node.style.visibility = 'hidden';
                presentationSkill.content.node.style.visibility = 'hidden';

                //
                presentationInfo.infoTextObject.whoIAmTitle.node.style.visibility = 'hidden';
                presentationInfo.infoTextObject.whoIAmFirstRow.node.style.visibility = 'hidden';
                presentationInfo.infoTextObject.whoIAmSecondRow.node.style.visibility = 'hidden';
                presentationInfo.infoTextObject.whoIAmThirdRow.node.style.visibility = 'hidden';
                presentationInfo.infoTextObject.whoIAmFourthRow.node.style.visibility = 'hidden';
                presentationInfo.infoTextObject.careerTitle.node.style.visibility = 'hidden';
                presentationInfo.infoTextObject.careerFirstRow.node.style.visibility = 'hidden';
                presentationInfo.infoTextObject.careerSecondRow.node.style.visibility = 'hidden';
                presentationInfo.infoTextObject.careerThirdRow.node.style.visibility = 'hidden';
                presentationInfo.infoTextObject.careerFourthRow.node.style.visibility = 'hidden';


                window.setTimeout(function () {

                    presentationHeader.content.node.style.visibility = 'visible';
                    presentationSkill.content.node.style.visibility = 'visible';

                    presentationInfo.infoTextObject.whoIAmTitle.node.style.visibility = 'visible';
                    presentationInfo.infoTextObject.whoIAmFirstRow.node.style.visibility = 'visible';
                    presentationInfo.infoTextObject.whoIAmSecondRow.node.style.visibility = 'visible';
                    presentationInfo.infoTextObject.whoIAmThirdRow.node.style.visibility = 'visible';
                    presentationInfo.infoTextObject.whoIAmFourthRow.node.style.visibility = 'visible';
                    presentationInfo.infoTextObject.careerTitle.node.style.visibility = 'visible';
                    presentationInfo.infoTextObject.careerFirstRow.node.style.visibility = 'visible';
                    presentationInfo.infoTextObject.careerSecondRow.node.style.visibility = 'visible';
                    presentationInfo.infoTextObject.careerThirdRow.node.style.visibility = 'visible';
                    presentationInfo.infoTextObject.careerFourthRow.node.style.visibility = 'visible';

                    app.svg.animateText(presentationHeader.paper, presentationHeader.content.id, '200', '2s');
                    app.svg.animateText(presentationSkill.paper, presentationSkill.content.id, '200', '2s');

                    app.svg.animateText(presentationInfo.paper, presentationInfo.infoTextObject.whoIAmTitle.id, '200', '2s');
                    app.svg.animateText(presentationInfo.paper, presentationInfo.infoTextObject.whoIAmFirstRow.id, '200', '2s');
                    app.svg.animateText(presentationInfo.paper, presentationInfo.infoTextObject.whoIAmSecondRow.id, '200', '2s');
                    app.svg.animateText(presentationInfo.paper, presentationInfo.infoTextObject.whoIAmThirdRow.id, '200', '2s');
                    app.svg.animateText(presentationInfo.paper, presentationInfo.infoTextObject.whoIAmFourthRow.id, '200', '2s');
                    app.svg.animateText(presentationInfo.paper, presentationInfo.infoTextObject.careerTitle.id, '200', '2s');
                    app.svg.animateText(presentationInfo.paper, presentationInfo.infoTextObject.careerFirstRow.id, '200', '2s');
                    app.svg.animateText(presentationInfo.paper, presentationInfo.infoTextObject.careerSecondRow.id, '200', '2s');
                    app.svg.animateText(presentationInfo.paper, presentationInfo.infoTextObject.careerThirdRow.id, '200', '2s');
                    app.svg.animateText(presentationInfo.paper, presentationInfo.infoTextObject.careerFourthRow.id, '200', '2s');

                }, 3000);



                //SVG Progress Bar
                let presentationProgressBar = svgContainer.presentation.progressBar();
                app.svg.animateDraw(presentationProgressBar.paper, presentationProgressBar.id, transition);

                //Html part animation
                presentationProgressBar.progressBarObject.htmlSubPath.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.htmlProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.htmlBgProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObjectText.htmlText.node.style.visibility= 'hidden';

                //
                presentationInfo.infoPathObject.whoIAmTitleSubPath.node.style.visibility = 'hidden';

                window.setTimeout(function() {

                    let transition = 'stroke-dashoffset 1s ease-in-out';

                    presentationProgressBar.progressBarObject.htmlProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.htmlBgProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.htmlSubPath.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObjectText.htmlText.node.style.visibility= 'visible';
                    presentationInfo.infoPathObject.whoIAmTitleSubPath.node.style.visibility = 'visible';

                    app.svg.animateDraw(presentationProgressBar.paper, presentationProgressBar.progressBarObject.htmlSubPath.id, transition);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.htmlProgressBar.id, transition, 80);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.htmlBgProgressBar.id, transition, 100);
                    app.svg.animateText(presentationProgressBar.paper, presentationProgressBar.progressBarObjectText.htmlText.id, '200', '2s');
                    app.svg.animateDraw(presentationInfo.paper, presentationInfo.infoPathObject.whoIAmTitleSubPath.id, transition);

                }, 150);

                //CSS part animation
                presentationProgressBar.progressBarObject.cssSubPath.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.cssProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.cssBgProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObjectText.cssText.node.style.visibility= 'hidden';
                presentationProgressBar.progressBarObject.sassProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.sassBgProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObjectText.sassText.node.style.visibility= 'hidden';

                window.setTimeout(function() {

                    let transition = 'stroke-dashoffset 1s ease-in-out';

                    presentationProgressBar.progressBarObject.cssSubPath.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.cssProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.cssBgProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObjectText.cssText.node.style.visibility= 'visible';
                    presentationProgressBar.progressBarObject.sassProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.sassBgProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObjectText.sassText.node.style.visibility= 'visible';

                    app.svg.animateDraw(presentationProgressBar.paper, presentationProgressBar.progressBarObject.cssSubPath.id, transition);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.cssProgressBar.id, transition, 70);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.cssBgProgressBar.id, transition, 100);
                    app.svg.animateText(presentationProgressBar.paper, presentationProgressBar.progressBarObjectText.cssText.id, '200', '2s');
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.sassProgressBar.id, transition, 60);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.sassBgProgressBar.id, transition, 100);
                    app.svg.animateText(presentationProgressBar.paper, presentationProgressBar.progressBarObjectText.sassText.id, '200', '2s');

                }, 700);

                //JavaScript part animation
                presentationProgressBar.progressBarObject.javascriptSubPath.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.javascriptProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.javascriptBgProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObjectText.javascriptText.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.es2015ProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.es2015BgProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObjectText.es2015Text.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.nodeProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.nodeBgProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObjectText.nodeText.node.style.visibility = 'hidden';

                //
                presentationInfo.infoPathObject.careerTitleSubPath.node.style.visibility = 'hidden';
                presentationInfo.infoPathObject.careerPath.node.style.visibility = 'hidden';
                presentationInfo.infoPathObject.cvButton.node.style.visibility = 'hidden';

                window.setTimeout(function() {

                    let transition = 'stroke-dashoffset 1s ease-in-out';

                    presentationProgressBar.progressBarObject.javascriptSubPath.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.javascriptProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObjectText.javascriptText.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.javascriptBgProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.es2015ProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.es2015BgProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObjectText.es2015Text.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.nodeProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.nodeBgProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObjectText.nodeText.node.style.visibility = 'visible';

                    presentationInfo.infoPathObject.careerTitleSubPath.node.style.visibility = 'visible';
                    presentationInfo.infoPathObject.careerPath.node.style.visibility = 'visible';
                    presentationInfo.infoPathObject.cvButton.node.style.visibility = 'visible';

                    app.svg.animateDraw(presentationProgressBar.paper, presentationProgressBar.progressBarObject.javascriptSubPath.id, transition);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.javascriptProgressBar.id, transition, 60);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.javascriptBgProgressBar.id, transition, 100);
                    app.svg.animateText(presentationProgressBar.paper, presentationProgressBar.progressBarObjectText.javascriptText.id, '200', '2s');
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.es2015ProgressBar.id, transition, 30);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.es2015BgProgressBar.id, transition, 100);
                    app.svg.animateText(presentationProgressBar.paper, presentationProgressBar.progressBarObjectText.es2015Text.id, '200', '2s');
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.nodeProgressBar.id, transition, 10);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.nodeBgProgressBar.id, transition, 100);
                    app.svg.animateText(presentationProgressBar.paper, presentationProgressBar.progressBarObjectText.nodeText.id, '200', '2s');

                    app.svg.animateDraw(presentationInfo.paper, presentationInfo.infoPathObject.careerTitleSubPath.id, transition);
                    app.svg.animateDraw(presentationInfo.paper, presentationInfo.infoPathObject.careerPath.id, transition);
                    app.svg.animateDraw(presentationInfo.paper, presentationInfo.infoPathObject.cvButton.id, transition);

                }, 1250);

                //Php Part Animation
                presentationProgressBar.progressBarObject.phpSubPath.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.phpProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.phpBgProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObjectText.phpText.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.laravelProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.laravelBgProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObjectText.laravelText.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.symfonyProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.symfonyBgProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObjectText.symfonyText.node.style.visibility = 'hidden';

                window.setTimeout(function() {

                    let transition = 'stroke-dashoffset 1s ease-in-out';
                    presentationProgressBar.progressBarObject.phpSubPath.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.phpProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.phpBgProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObjectText.phpText.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.laravelProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.laravelBgProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObjectText.laravelText.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.symfonyProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.symfonyBgProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObjectText.symfonyText.node.style.visibility = 'visible';

                    app.svg.animateDraw(presentationProgressBar.paper, presentationProgressBar.progressBarObject.phpSubPath.id, transition);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.phpProgressBar.id, transition, 40);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.phpBgProgressBar.id, transition, 100);
                    app.svg.animateText(presentationProgressBar.paper, presentationProgressBar.progressBarObjectText.phpText.id, '200', '2s');
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.laravelProgressBar.id, transition, 5);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.laravelBgProgressBar.id, transition, 100);
                    app.svg.animateText(presentationProgressBar.paper, presentationProgressBar.progressBarObjectText.laravelText.id, '200', '2s');
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.symfonyProgressBar.id, transition, 5);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.symfonyBgProgressBar.id, transition, 100);
                    app.svg.animateText(presentationProgressBar.paper, presentationProgressBar.progressBarObjectText.symfonyText.id, '200', '2s');

                }, 1800);

                //DataBase part animation
                presentationProgressBar.progressBarObject.sqlSubPath.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.sqlProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.sqlBgProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObjectText.sqlText.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.noSqlProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObject.noSqlBgProgressBar.node.style.visibility = 'hidden';
                presentationProgressBar.progressBarObjectText.noSqlText.node.style.visibility = 'hidden';

                window.setTimeout(function() {

                    let transition = 'stroke-dashoffset 1s ease-in-out';

                    presentationProgressBar.progressBarObject.sqlSubPath.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.sqlProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.sqlBgProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObjectText.sqlText.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.noSqlProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObject.noSqlBgProgressBar.node.style.visibility = 'visible';
                    presentationProgressBar.progressBarObjectText.noSqlText.node.style.visibility = 'visible';

                    app.svg.animateDraw(presentationProgressBar.paper, presentationProgressBar.progressBarObject.sqlSubPath.id, transition);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.sqlProgressBar.id, transition, 10);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.sqlBgProgressBar.id, transition, 100);
                    app.svg.animateText(presentationProgressBar.paper, presentationProgressBar.progressBarObjectText.sqlText.id, '200', '2s');
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.noSqlProgressBar.id, transition, 5);
                    app.svg.animateProgressBar(presentationProgressBar.paper, presentationProgressBar.progressBarObject.noSqlBgProgressBar.id, transition, 100);
                    app.svg.animateText(presentationProgressBar.paper, presentationProgressBar.progressBarObjectText.noSqlText.id, '200', '2s');

                }, 2450);

            }

        };

    }

}

export default Presentation;