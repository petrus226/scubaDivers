const SURFACE = 0
const INITIAL_OXYGEN = 150
const NO_OXYGEN = 0
const INITIAL_SCORE = 0

class ScubaDiver{

  constructor(){
    this.oxygen = INITIAL_OXYGEN
    this.depth = SURFACE
    this.points = INITIAL_SCORE
  }
  isAlive(){
    return this._hasRemaniningOxygen() || this._isOnSurface()
  }
  dive(){
    this.depth--
    this._spendOxygen()
    this._calculateScore()
  }
  stay(){
    this._spendOxygen()
    this._calculateScore()
  }
  climb(){
    if(!this._isOnSurface()){
      this.depth++
    }
    this._calculateScore()
  }
  score() {
    return this.points
  }
  _calculateScore(){
    this.points += Math.abs(this.depth)
  }
  _spendOxygen(){
    this.oxygen += this.depth
  }
  _hasRemaniningOxygen(){
    return this.oxygen > NO_OXYGEN
  }
  _isOnSurface(){
    return this.depth == SURFACE
  }

}
