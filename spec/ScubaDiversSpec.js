
describe('ScubaDivers', ()=>{
  let scubaDiver = undefined
  beforeEach(()=>{
    scubaDiver = new ScubaDiver()
  })
  it('start alive', ()=>{
    expect(scubaDiver.isAlive()).toEqual(true)
  })
  it('dies when it has no oxygen under the surface',()=>{
    kill(scubaDiver)

    expect(scubaDiver.isAlive()).toEqual(false)
  })
  it('starts at zero points of score',()=>{
    expect(scubaDiver.score()).toEqual(0)
  })
  it('scores when it dives', () =>{
    scubaDiver.dive()

    expect(scubaDiver.score()).toEqual(1)
  })
  it('scores higher the deeper it dives', ()=>{
    scubaDiver.dive()
    scubaDiver.dive()

    expect(scubaDiver.score()).toEqual(3)
  })
  it('spends more oxygen the deeper it dives',()=>{
    kill(scubaDiver)

    expect(scubaDiver.isAlive()).toEqual(false)
  })
  it('can stay at the same depth', ()=>{
    scubaDiver.dive()

    scubaDiver.stay()

    expect(scubaDiver.score()).toEqual(2)
  })
  it('consumes oxygen when stay at the same depth', ()=>{
    scubaDiver.dive()
    for(i=150;i>0;i--){
      scubaDiver.stay()
    }

    expect(scubaDiver.isAlive()).toEqual(false)
  })
  it('can climb up', ()=>{
    scubaDiver.dive()
    scubaDiver.dive()

    scubaDiver.climb()

    expect(scubaDiver.score()).toEqual(4)
  })
  it('spends oxygen on the climb up', ()=>{
    for(i=17;i>0;i--){
      scubaDiver.dive()
    }

    scubaDiver.climb()

    expect(scubaDiver.isAlive()).toEqual(false)
  })
  it('can not climb over the surface', ()=>{
    scubaDiver.climb()

    expect(scubaDiver.score()).toEqual(0)
  })





  function kill(scubaDiver){
    for(i=18; i>0; i--){
        scubaDiver.dive()
    }
  }
})
