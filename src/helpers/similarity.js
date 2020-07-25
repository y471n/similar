import levenshtein from "js-levenshtein";

const sortObject = (unordered) => {
  // This shouldn't be the case anyhow; will remove later
  if (!unordered || typeof unordered !== "object") {
    return unordered;
  }

  if (Array.isArray(unordered)) {
    const newArray = unordered.map((item) => sortObject(item));
    newArray.sort();
    return newArray;
  }

  const ordered = {};
  Object.keys(unordered)
    .sort()
    .forEach((key) => {
      ordered[key] = sortObject(unordered[key]);
    });
  return ordered;
};

const getComparisonScores = (str1, str2) => {
  if (!str1 || !str2) {
    return 0;
  }
  try {
    const json1 = JSON.parse(str1);
    const json2 = JSON.parse(str2);

    if (typeof json1 !== "object" || typeof json2 !== "object") {
      return 0;
    }

    // Sort the JSONs
    const ordered1 = sortObject(json1);
    const ordered2 = sortObject(json2);

    // Calculate Levensthein Distance
    let longerString = JSON.stringify(ordered1);
    let shorterString = JSON.stringify(ordered2);
    if (longerString.length < shorterString.length) {
      [longerString, shorterString] = [shorterString, longerString];
    }
    // Get Levensthein Distance
    const levenshteinDistance = levenshtein(longerString, shorterString);
    // Set Score
    const score =
      (longerString.length - levenshteinDistance) / longerString.length;
    return score;
  } catch (e) {
    // One of them isn't a valid JSON
    return 0;
  }
};

export default getComparisonScores;
