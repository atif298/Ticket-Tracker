import React from 'react';
import Counter from '../Counter/Counter';
import "./EmployeCard.scss";

const EmployeCard = ({teamArr}) => {
    const employecardJSX = teamArr.map((employe) => {
        return (
            <div className='employe-cards__each'>
                <h2 className='employe-cards__name'>{employe.name}</h2>
                <h3 className='employe-cards__role'>{employe.role}</h3>
                <Counter />
            </div>
        )})

  return (
    <div className='employe-cards'>
        {employecardJSX}
    </div>
    )
}

export default EmployeCard;