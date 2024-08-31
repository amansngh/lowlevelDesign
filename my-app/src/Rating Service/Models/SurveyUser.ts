import SurveyManager from "../Handlers/SurveyManager";

export default class SurveyUser
{
    name : string;
    userid : string;
    surveyManager : SurveyManager
    constructor(name : string, id : string , surveyManager : SurveyManager)
    {
        this.name = name;
        this.userid = id;
        this.surveyManager = surveyManager;
    }

    takeSurvey(id : string, ansFormat : any[])
    {
        //ansFormat {qid, answers}
        let survey = this.surveyManager.getSurvey(id);
        let idx = this.surveyManager.surveys.indexOf(survey);
        if(survey)
        {
            ansFormat.forEach(ansForm => {
                for(let ques of survey.questions)
                    if(ques.id == ansForm.qid)
                    {
                        ques.addAnswers(ansForm.ans);
                    }
                
            });
        }
    }
}