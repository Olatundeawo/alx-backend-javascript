export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1 :Student = {
    firstName: 'Precious',
    lastName: 'Ayodele',
    age: 22,
    location: 'Oye Ekiti'
};

const student2 : Student = {
    firstName: 'Oluwasomi',
    lastName: 'Ayayi',
    age: 25,
    location: 'Akungba'
};

const studentsList: Array<Student> = [
    student1, student2
];

const tbl = document.createElement('table');
const tableHead = document.createElement('thead');
const tblBody = document.createElement('tbody');
const row = document.createElement('tr');
const text1 = document.createTextNode('FirstName');
const text2 = document.createTextNode('Location');
row.appendChild(text1);
row.appendChild(text2);

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const text1 = document.createTextNode(`${student.firstName}`);
    const text2 = document.createTextNode(`${student.location}`);
    row.appendChild(text1);
    row.appendChild(text2);
    tblBody.appendChild(row);
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
});