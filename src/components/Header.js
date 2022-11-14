import React from 'react'

export default function Header() {
    return (
        <nav className="navbar  container mx-auto">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img className='w-100' src="logo.png" alt="" />
                </a>
                <div class="dropdown">
                    <button class="btn text-app fw-bold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-user"></i> ProfileName
                    </button>
                    {/* <ul class="dropdown-menu ">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul> */}
                </div>
            </div>
        </nav>
    )
}
