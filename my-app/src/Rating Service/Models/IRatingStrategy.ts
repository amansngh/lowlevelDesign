export default interface IRatingStrategy
{
    getRating(ansWeights : number[]): number;
}