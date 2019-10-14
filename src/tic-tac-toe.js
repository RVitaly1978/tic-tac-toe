class TicTacToe {
    constructor() {
        this._gameField = [[null, null, null], [null, null, null], [null, null, null]];
        this._currentValue = "x";
    }

    getCurrentPlayerSymbol() {
        if (this._currentValue === "x"
            || this._currentValue === "o") {
            return this._currentValue;
        } else {
            return null; // ----------------------------------------------- return error
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this._gameField[rowIndex][columnIndex] === null) {
            this._gameField[rowIndex][columnIndex] = this._currentValue;

            if (this._currentValue === "x") {
                this._currentValue = "o";

            } else {
                this._currentValue = "x";
            }

        } else {
            return this // ------------------------------------------------ return error
        }
    }

    isFinished() {
        if (this.getWinner() !== null
            || this.isDraw() === true) {
            return true;
        } else {
            return false;
        }
    }
    
    getWinner() {
        this._winner = null;

        for (let i = 0; i < 3; i++) {
            if (this._gameField[i][0] === this._gameField[i][1]
                && this._gameField[i][0] === this._gameField[i][2]
                && this._gameField[i][0] !== null) {
    
                this._winner = this._gameField[i][0];
    
            } else if (this._gameField[0][i] === this._gameField[1][i]
                && this._gameField[0][i] === this._gameField[2][i]
                && this._gameField[0][i] !== null) {
    
                this._winner = this._gameField[0][i];
            }
        }
    
        if (this._gameField[0][0] === this._gameField[1][1]
            && this._gameField[0][0] === this._gameField[2][2]
            && this._gameField[0][0] !== null) {
    
            this._winner = this._gameField[0][0];
    
        } else if (this._gameField[0][2] === this._gameField[1][1]
            && this._gameField[0][2] === this._gameField[2][0]
            && this._gameField[0][2] !== null) {
    
            this._winner = this._gameField[0][2];
        }

        return this._winner;
    }

    noMoreTurns() {
        let _isNullField = false;
        for (let i = 0; i < 3; i++) {
            if (this._gameField[i].includes(null)) {
                _isNullField = true;
                break;
            }
        }
        return !_isNullField;
    }

    isDraw() {
        if (this.getWinner() === null
            && this.noMoreTurns() === true) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this._gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
