import QOption from "./Models/QOption";
import Question from "./Models/Question";
import SurveyAdmin from "./Models/SurveyAdmin";
import SurveyUser from "./Models/SurveyUser";
import SurveyManager from "./Handlers/SurveyManager";

export default class SurveyMain{
    mimic()
    {
        let sManager = SurveyManager.getInstance();
        let u1 = new SurveyUser("user1", "1", sManager);
        let u2 = new SurveyUser("user2", "2", sManager);
        sManager.addUser(u1);
        sManager.addUser(u2);

        let admin1 = new SurveyAdmin("admin1", "1", sManager);
        sManager.addAdmin(admin1);
        let survey1 = admin1.createSurvey("s1", "Surv1");
        
        let ques1 = new Question("1", "Q1");
        let q1o1 = new QOption(1, "op1", 1); ques1.addOption(q1o1)
        let q1o2 = new QOption(2, "op2", 2); ques1.addOption(q1o2)
        let q1o3 = new QOption(3, "op3", 3); ques1.addOption(q1o3)
        let q1o4 = new QOption(4, "op4", 4); ques1.addOption(q1o4)


        let ques2 = new Question("2", "Q2");
        ques2.addOption(new QOption(1, "op21", 20));
        ques2.addOption(new QOption(2, "op22", 35));
        ques2.addOption(new QOption(3, "op2.3", 99));
        ques2.addOption(new QOption(4, "op2.4", 100));
        
        survey1.addQuestion(ques1);
        survey1.addQuestion(ques2);
        sManager.addSurvey(survey1);

        u1.takeSurvey("s1", [{qid : "1", ans : [2, 3]}]);
        u1.takeSurvey("s1", [{qid : "2", ans : [1, 2]}]);

        console.log("Display Answers");
        console.log(survey1.getSurveyRating());
        console.log(survey1.questions[0].getRating());
    }
}