interface SportStatCategories {
  [key: string]: {
    [key: string]: string[];
  };
}

const statCategories: SportStatCategories = {
  hockey: {
    goalie: ['Saves', 'Goals'],
    goalieCalcs: ['SOG', 'Save %'],
    skater: ['Goals', 'Assists'],
    skaterCalcs: ['Points'],
  },
  basketball: {
    guard: [
      'Points',
      'Assists',
      'Rebounds',
      'Steals',
      'Blocks',
      'Field Goal %',
      'Free Throw %',
    ],
    guardCalcs: ['PTS'],
  },
};
export default statCategories;
