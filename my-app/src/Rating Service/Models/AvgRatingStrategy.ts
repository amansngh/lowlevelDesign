import IRatingStrategy from "./IRatingStrategy";

export default class AvgRatingStrategy implements IRatingStrategy{
    getRating(ansWeights : number[]): number {
        if(ansWeights.length == 0) return -1;

        let sumOfWs = 0;
        ansWeights.forEach((ansW)=> {
            sumOfWs+=ansW;
        })

        return sumOfWs/ansWeights.length;
    }
}