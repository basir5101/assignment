import React from 'react'
import BreadCrump from '../components/Breadcrump'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'

export default function Page1() {
    const info = [
        {
            title: 'Invite Your Friends',
            des: 'Share the link tutedude.com with your friends',
            img: img1
        },
        {
            title: 'You get ₹ 200 as referral money',
            des: 'On total purchase the friend makes, into your wallet',
            img: img2
        },

        {
            title: 'Transfer money from wallet',
            des: 'When the wallet balance reaches ₹200 or more, you can withdraw it',
            img: img3
        },
        {
            title: 'Friend purchases any course',
            des: 'Using your REFERRAL CODE in the payments page',
            img: img4
        },
        {
            title: 'Your Friend gets ₹ 200 Off ',
            des: 'On his overall fee on successful purchase using your referral code',
            img: img5
        },
    ]
    return (
        <div className='container'>
            <BreadCrump />
            <div className="container">
                <div className="row container mx-auto my-5">
                    <div className="col-md-6">
                        <div className="shadow rounded-3 p-4 me-5 ">
                            <div className='d-flex align-item-center justify-content-between'>
                                <div>
                                    <div className="text-app">Referral Earing</div>
                                    <div className="h3">₹ 2,500</div>
                                </div>
                                <div><p className="text-app">Total Referrals</p>
                                    <p className="h3">7</p></div>
                                <div><p className="text-app">Wallet Balance</p>
                                    <p className="h3">₹ 500</p></div>
                            </div>
                            <div className="text-center mt-4">
                                <button className="btn bg-app text-white rounded-pill">Withdraw Balance</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="h3 text-app">Your Referral Code </div>
                        <div className='border-app h5 text-app  d-flex justify-content-between px-5 py-2 rounded mt-2'>
                            {
                                ['E', 'D', 'C', 'H', '5', '4'].map((item, index) => <span key={index}> {item} </span>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h4 className='text-app ms-3 mb-3'> How does it work ?</h4>
                <div className="row mx-auto">
                    {
                        info.map((item, index) => (
                            <div key={index} className="col-md-6 mb-4">
                                <div>
                                    <div className="d-flex">
                                        <div className='bg-light m-3 rounded-circle p-2'>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className='ms-1'>
                                            <div className="fw-bold">{item.title}</div>
                                            <div className="col-9">{item.des}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="container ms-3 my-5">
                <a className='nav-link text-app fw-bold' href="">Friends Who Enrolled</a>
                <a className='nav-link text-app fw-bold' href="">Terms & Conditions</a>
            </div>
        </div>
    )
}
