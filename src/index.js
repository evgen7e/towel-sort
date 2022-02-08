module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) return [];
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    i % 2 !== 0 ? res.push(matrix[i].reverse()) : res.push(matrix[i]);
  }
  return res.flat();
}