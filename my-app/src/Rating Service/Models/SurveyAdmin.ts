import SurveyManager from "../Handlers/SurveyManager";
import Survey from "./Survey";

export default class SurveyAdmin
{
    name : string;
    userid : string;
    surveyManager : SurveyManager;
    constructor(name : string, id : string, surveyManager : SurveyManager)
    {
        this.name = name;
        this.userid = id;
        this.surveyManager = surveyManager;
    }

    createSurvey(id : string, name : string) : Survey
    {
        let survey = new Survey(id, name, this.userid, this.surveyManager);
        return survey;
    }
}