// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory(specimenNum ,dna ) {
    return {
      specimenNum,
      dna,
      mutate() {
        const random = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase() 
        while(this.dna[random] === newBase) {
          newBase = returnRandBase()
        }
        this.dna[random] = newBase
        return this.dna;
      }, 
      compareDNA(otherOrganism) {
        const matchingBases = this.dna.reduce((acc, base, index) => {
          if (base === otherOrganism.dna[index]) {
            return acc + 1;
          }
          return acc;
        }, 0);
        const percentage = (matchingBases/ this.dna.length) * 100;
        console.log(`Specimen ${this.specimenNum} and Specimen ${otherOrganism.specimenNum} have ${percentage.toFixed(2)}% DNA in common.`)
      },
      willLikelySurvive() {
        const cgBases = this.dna.filter(base => base === 'C' || base === 'G');
        return (cgBases.length/this.dna.length) >= 0.6;
  
      }
    }
  }
  
  const organism1 = pAequorFactory(1, mockUpStrand())
  const organism2 = pAequorFactory(2, mockUpStrand())
  //console.log(organism1);
  //console.log(organism2);
  
  organism1.compareDNA(organism2)
  console.log(organism1.willLikelySurvive())
  console.log(organism2.willLikelySurvive())
  
  
  
  