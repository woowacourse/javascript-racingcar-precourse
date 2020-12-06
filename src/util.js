const isSplitedRest = names => names.split(",")[0] !== names;

const hasLeastTwoCars = names => names.split(",").length >= 2;

const isLessSixCharacters = names => {
  const nameArray = names.split(",");
  for (let i = 0; i < nameArray.length; i++) {
    if (nameArray[i].length > 5) {
      return false;
    }
  }
  return true;
};

const hasEmptyString = names => names.split(",").includes("");

export const isValidInputNames = names => {
  return (
    isSplitedRest(names) &&
    hasLeastTwoCars(names) &&
    isLessSixCharacters(names) &&
    !hasEmptyString(names)
  );
};

export const isValidInputCount = count => {
  return count >= 1;
};

export const getRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};
