Rough flow

Requirement clarification and object idenitification.

Flow of the Game.
There will be a board from 1 to 100.
Two players roll a dice upto 6 and if a ladder is there climb up or if a snake is there climb down.
Switch between players.

Object.
Dice. <roll()> How many? Should be scalabale
PieceType
Player <name, PieceType> 2, should be scalabale, current position? next player problem //Can be solved with Dequeue.
Game<Board, Player[]>, Dice[], Curretpositions>
Board<snakes, ladder> size 10X10 , configurable?
WinningCondition / Strategy, any one wins game finishes.
Snakes, Ladder How many setup time, per dynamically define. Configurable.
thought of cells but do we need it?