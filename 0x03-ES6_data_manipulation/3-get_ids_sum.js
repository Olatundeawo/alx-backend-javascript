export default function getStudentIdsSum(students) {
  return students.reduce((total, amount) => total + amount.id, 0);
}
