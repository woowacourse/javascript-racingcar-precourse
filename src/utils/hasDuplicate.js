function hasDuplicate(arr) {
  return arr.length !== new Set(arr).size;
}

export default hasDuplicate;
