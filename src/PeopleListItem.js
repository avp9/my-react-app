import React from 'react'

export const PeopleListItem = ({ person }) => {
    <div>
        <h3>{person.name}</h3>
        <p>{person.age}</p>
        <p>{person.hairColor}</p>
    </div>
}