import GameUtils from "../GameUtils";

export default class Dice {
    roll() : number
    {
        return GameUtils.getRandomNumber(1, 6);
    }
}