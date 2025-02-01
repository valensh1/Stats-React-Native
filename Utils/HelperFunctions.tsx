class HelperFunctions {
  static capitalizeFirstLetter = (word: string) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  };
}
export default HelperFunctions;
