import React from 'react';
import Counter from '../Counter/Counter';
import "./EmployeCard.scss";

const EmployeCard = ({teamArr}) => {
    const employecardJSX = teamArr.map((employe) => {
        return (
            <div className='employe-card'>
            <h2>{employe.name}</h2>
            <h3>{employe.role}</h3>
            <Counter />
            </div>
        )})

  return (
    <div>
        {employecardJSX}
    </div>
    )
}

export default EmployeCard;