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
};
export default statCategories;
