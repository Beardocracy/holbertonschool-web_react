interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const studentA: Student = {
    firstName: 'Shooter',
    lastName: 'McGavin',
    age: 1,
    location: 'Tulsa'
};

const studentB: Student = {
    firstName: 'Scooby',
    lastName: 'Doo',
    age: 2,
    location: 'Flat Earth'
};

const studentsList: Array<Student> = [ studentA, studentB ];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tbody.insertRow();
    const first: HTMLTableCellElement = row.insertCell();
    const location: HTMLTableCellElement = row.insertCell();
    first.innerHTML = student.firstName;
    location.innerHTML = student.location;
});

document.body.appendChild(table);
