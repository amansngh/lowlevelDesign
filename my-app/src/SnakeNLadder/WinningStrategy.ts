import IWinningStrategy from "./IWinningStrategy";

export default class WinningStategy implements IWinningStrategy
{
    hasWon(position : number, maxL : number): boolean {
        if(position >= maxL) return true;
        else return false;
    }
}