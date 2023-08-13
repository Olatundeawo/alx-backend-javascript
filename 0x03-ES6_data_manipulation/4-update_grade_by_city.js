export default function updateStudentGradeByCity(students, city, grade) {
  return students.filter((student) => student.location === city).map((myGrade) => {
    const newGrade = grade.filter((myGrade1) => myGrade1.studentId === myGrade.id);

    const studentGrade = myGrade;
    if (newGrade.length === 1) studentGrade.grade = newGrade[0].grade;
    else studentGrade.grade = 'N/A';
    return studentGrade;
  });
}
