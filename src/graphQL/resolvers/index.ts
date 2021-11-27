type Arg = {
  numDice: number;
  numSides?: number
};
type GETGIE = {
  numSides?: number,
};
type GETSIE = {
  numRolls: number,
};

// This class implements the RandomDie GraphQL type
class RandomDie {
  numSides: number;
  constructor(numSides: number) {
    this.numSides = numSides;
  }

  rollOnce() {
    return 1 + Math.floor(Math.random() * this.numSides);
  }

  roll({numRolls}: GETSIE) {
    var output = [];
    for (var i = 0; i < numRolls; i++) {
      output.push(this.rollOnce());
    }
    return output;
  }
}


const resolvers = {
  getDie: ({numSides}: GETGIE) => {
    return new RandomDie(numSides || 6);
  }
};

export default resolvers;
