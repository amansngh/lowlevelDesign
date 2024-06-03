export default interface IWinningStrategy {
    hasWon(position : number, maxL : number) : boolean;
}