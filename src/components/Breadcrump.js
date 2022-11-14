import React from 'react'

export default function BreadCrump() {
    const links = [
        'UI/UX', 'Refer & Earn'
    ]
    return (
        <nav className='mt-5'>
            <ul className='d-flex'>
                {
                    links.map((item, index) => (
                        <li className='list-group-item border-0 ms-2' key={index}> <a className='nav-link' href="">{item} {index + 1 < links.length && <i className='fa fa-chevron-right ms-2'></i>}</a> </li>
                    ))
                }
            </ul>
        </nav>
    )
}
