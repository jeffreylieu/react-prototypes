import React from 'react';
import Table from './table';

export default () => {
    return (
        <div className="container">
            <h1>"Student Grade Table"</h1>
            <Table data={students}/>
        </div>
    )
}

const students = [
    {
        student: 'Leonard Chan',
        course: 'sex ed',
        grade: 90
    },
    {
        student: 'Josh Wilcox',
        course: 'sex ed',
        grade: 100
    },
    {
        student: 'Chris Kosen',
        course: 'sex ed',
        grade: 50
    },
];