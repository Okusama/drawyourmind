import app from './app.js';

class CreateBlockSvg {

    constructor(data){

        this.data = data;
        this.paper = this.createPaper();

    }

    createPaper(){

        let data = this.data.paper;

        let paper = new Raphael(data.id, data.width, data.height);

        return paper;

    }

    createObjShapeSvg(){

        let objShape = {};

        for (let paramObj in this.data.objShape){

            switch (paramObj){

                case 'path':

                    objShape.path = app.svg.createPath(this.paper, this.data.objShape.path);

                    break;

                case 'circle':

                    objShape.push(app.svg.createCircle(this.paper, paramObj[data]));

                    break;

                default:

                    break;

            }

        }

        console.log(objShape);

        return objShape;

    }



    createObjText(){

        let data = this.objTextParam;

        let objText = {};

        for (let paramObj in data){

            objText.push(app.svg.createText(this.paper, paramObj[data]));

        }

        return objText;

    }

    animateSvg(transition, textPathLength, textTimeAnimation){

        for (let shape of this.objShape){

            app.svg.animateDraw(this.paper, shape.id, transition);

        }

        for (let text of this.objText){

            app.svg.animateText(this.paper, text.id, textPathLength, textTimeAnimation);

        }

    }

}

export default CreateBlockSvg;