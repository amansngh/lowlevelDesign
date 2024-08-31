import AvgRatingStrategy from "./AvgRatingStrategy";
import IRatingStrategy from "./IRatingStrategy";
import QOption from "./QOption";
import QOptions from "./QOption";

export default class Question
{
    readonly id : string;
    text : string;
    options : QOption[];
    answers : QOption[];
    rating : number;
    ratingStrategy : IRatingStrategy;

    constructor(id : string, text : string)
    {
        this.id = id;
        this. text = text;
        this.options = [];
        this.answers = [];
        this.rating = -1;
        this.ratingStrategy = new AvgRatingStrategy();      
    }

    addOption(qOps : QOptions)
    {
        this.options.push(qOps);
    }

    fetchOpnById(opnId : number) : QOption
    {
        for(let opn of this.options){
            if(opn.opnId == opnId) 
                return opn;
            }
            return null;
    }

    addAnswers(opnIds: number[])
    {
        opnIds.forEach((opnId)=> {
            let opn = this.fetchOpnById(opnId);
            if(opn) this.answers.push(opn);
        })
    }

    removeOption(qOps : QOptions)
    {
        let idx = this.options.indexOf(qOps);
        if(idx>=0) this.options.splice(idx, 1);
    }

    updateOption(qOps : QOption)
    {
        
    }

    getRating() : number
    {
        if(this.rating == -1)
        {
            let ansWeights : number[] = [];
            this.answers.forEach((ans) => {
                ansWeights.push(ans.weight);
            })
            this.rating = this.ratingStrategy.getRating(ansWeights);
        }
        
        return this.rating;
    }
}