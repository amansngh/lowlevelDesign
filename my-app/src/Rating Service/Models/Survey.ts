import { verify } from "crypto";
import SurveyManager from "../Handlers/SurveyManager";
import Question from "./Question";

//Survey[Sid, Qs, AddQues, getRating,// isAdmin, isUser]
export default class Survey{
    id : string;
    name : string;
    readonly createdBy : string;
    questions : Question[];
    private surveyRating : number;
    surveyManager : SurveyManager;

    constructor(id : string, name : string, admindId : string, surveyManager : SurveyManager)
    {
        if(surveyManager.verifyAdmin(admindId))
        {
            this.id = id;
            this.name = name;
            this.createdBy = admindId;
            this.questions = [];
            this.surveyRating = -1;
            this.surveyManager = surveyManager;
        }
        else throw new DOMException("Not Admin Creation is not Allowed");
    }

    addQuestion(ques : Question)
    {
        this.questions.push(ques);
    }

    removeQuestion(ques : Question)
    {
        let idx = this.questions.indexOf(ques);
        if(idx>=0) this.questions.splice(idx, 1);
    }

    getSurveyRating() : number
    {
        if(this.surveyRating == -1)
        {
            let survRating = 0;
            this.questions.forEach((ques) => {
                survRating += ques.getRating();
            })
            this.surveyRating = survRating;
        }
        
        return this.surveyRating;
    }
}