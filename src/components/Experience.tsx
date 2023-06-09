import React from 'react'

const Details = ({ position, company, companyLink, time, address, work }) => {
    return (
        <li>
            <div>
                <h3>{position}&nbsp;<a href={companyLink}>{company}</a></h3>
                <span>
                    {time}  {address}
                </span>
                <p>
                    {work}
                </p>
            </div>
        </li>
    )
}

const Experience = () => {
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'></h2>
            <div className='w-[75%] mx-auto relative'>
                <ul>
                </ul>
            </div>
        </div>
    )
}

export default Experience