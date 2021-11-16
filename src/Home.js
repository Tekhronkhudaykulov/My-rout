import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className="container">
            <h1>All programming language</h1>
            <div className="box_items">
                <div className="box">
                    <div className="box_img">
                    <img src="https://cdn-images-1.medium.com/1*sNoZDDyBPtpVvU23eDhWcQ.jpeg" alt="" />
                    </div>
                    <Link to="/about" >React Js</Link>
                </div>
                <div className="box">
                    <div className="box_img">
                    <img src="https://prog-time.ru/wp-content/uploads/2019/08/javascript6-compressed.jpg" alt="" />
                    </div>
                    <Link to="/blog">JavaScript</Link>
                </div>
                <div className="box">
                    <div className="box_img">
                    <img src="https://grinev.software/upload/iblock/671/6711194d1c7b6a2b1b023072a8ed307b.jpg" alt="" />
                    </div>
                    <Link to="konsovka">Node Js</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
