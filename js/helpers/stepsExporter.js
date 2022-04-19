class StepsExporter{
        steps = [];
        stepIndex = 0;
        finished = false;

    addStep(step){
        this.steps.push(step);
    }


    getSteps(){
        return this.steps;
    }

    reset(){
        this.steps = [];
        this.stepIndex = 0;
        this.finished = false;
    }

}