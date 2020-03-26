const user ={
    name: 'Mariana',
    lastName: 'Oliveira CM'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userUserWithFullName = getUserWithFullName(user);

console.log(userUserWithFullName);

const students =[
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    },
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log ('Alunos aprovados: ');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos: ');
console.log(students);