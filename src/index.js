import React from 'react';
import ReactDOM from 'react-dom';


function luckyNumber(){
    const element = Math.floor((Math.random() * 1000) + 1);
    return element;
}


var greeting = function(userObj){
    const element = (
        <div className='container'>
            <h1>Hello!{userObj.name}</h1>
            <h2 className='text-muted'>The lucky number is :{user.luckyNumber}</h2>
        </div>
    )
    return element;
}
// check from here
const element2 = {name: 'moocow'};

const user = {
    name: 'boo boo',
    luckyNumber: luckyNumber(Math.random()),
}



// this suppose to stay at the bottom of the page
ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);