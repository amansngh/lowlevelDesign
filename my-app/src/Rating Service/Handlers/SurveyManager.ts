import SurveyAdmin from "../Models/SurveyAdmin";
import Survey from "../Models/Survey";
import SurveyUser from "../Models/SurveyUser";

export default class SurveyManager
{
    surveys : Survey[];
    users : SurveyUser[];
    admins : SurveyAdmin[];
    static _instance : SurveyManager;

    private constructor()
    {
        this.surveys = [];
        this.admins = [];
        this.users = [];
    }

    static getInstance()
    {
        if(this._instance == null)
        {
            this._instance = new SurveyManager();
        }

        return this._instance
    }

    addUser(user : SurveyUser)
    {
        this.users.push(user);
    }

    addAdmin(admin : SurveyAdmin)
    {
        this.admins.push(admin);
    }

    verifyAdmin(adminId : string) : boolean
    {
        for(let admin of this.admins)
        {
            if(admin.userid == adminId) return true;
        }
        return false;
    }

    addSurvey(survey : Survey)
    {
        this.surveys.push(survey);
    }

    getSurvey(sid : string) : Survey
    {
        for(let survey of this.surveys)
            {
                if(survey.id == sid) return survey;
            }
        
            return null;
    }
}