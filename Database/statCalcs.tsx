class StatCalcs {
  hockey: {
    goalie: {
      shotsOnGoal: (goals: number, shots: number) => number;
      savePercentage: (saves: number, totalShots: number) => string;
    };
    skater: {
      points: (goals: number, assists: number) => number;
    };
  };

  constructor() {
    this.hockey = {
      goalie: {
        shotsOnGoal: (goal, shots) => this.shotsOnGoal(goal, shots),
        savePercentage: (saves, totalShots) =>
          this.savePercentage(saves, totalShots),
      },
      skater: {
        points: (goals, assists) => this.points(goals, assists),
      },
    };
  }
  shotsOnGoal(goals: number, saves: number) {
    return goals + saves;
  }

  savePercentage(saves: number, totalShots: number) {
    const result = Number(((saves / totalShots) * 100).toFixed(1));
    return isNaN(result) ? '0.0' : result.toFixed(1);
  }

  points(goals: number, assists: number) {
    return goals + assists;
  }
}
export default StatCalcs;
