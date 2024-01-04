import React from 'react'

function Tab() {
    return (
            <div className="container" id="container">

                <aside>
                    <div>
                        <input type="text" placeholder="Search" />
                        <br />
                        <button className="active" id="sidebar-btn">
                            Discover
                        </button>
                        <button id="sidebar-btn">Arcade</button>
                    </div>
                    {/* <div className="profile">
                        <img
                            src="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e.jpg"
                            alt="Profile Pic"
                            className="profile--pic"
                        />
                        <h1>Jimmy Donaldson</h1>
                    </div> */}
                </aside>
                <div className="content">
                    <div className="ideas">
                        <div className="idea">
                            <p>MASTER YOUR MAC</p>
                            <h1>
                                Make a great
                                <br /> handoff
                            </h1>
                            <p>Work seamlessly across devices</p>
                        </div>
                        <div className="idea">
                            <p>GET STARTED</p>
                            <h1>Apps optimised for mac with M1</h1>
                            <p>Work seamlessly across devices</p>
                        </div>
                    </div>
                    <section className="updates">
                        <h1>Updates</h1>
                        <div className="update update-1">
                            <div className="updt-left">
                                <img
                                    src="https://img.icons8.com/color/452/microsoft-powerpoint-2019.png"
                                    alt="powerpoint icon"
                                />
                                <h1>Microsoft Powerpoint</h1>
                            </div>
                            <div className="buttons">
                                <a href="https://bit.ly/3gdGvT8" target="_warning">
                                    <button>Update</button>
                                </a>
                            </div>
                        </div>
                        
                    </section>
                    {/* <section className="trending">
                        <h1>Trending</h1>
                        <div className="grid">
                            <span className="grid__app">
                                <h1>Kindle</h1>
                                <button>GET</button>
                            </span>
                            <span className="grid__app">
                                <h1>Slac</h1>
                                <button>GET</button>
                            </span>
                            <span className="grid__app">
                                <h1>Magnet</h1>
                                <button>₹699</button>
                            </span>
                            <span className="grid__app">
                                <h1>CotEditor</h1>
                                <button>GET</button>
                            </span>
                            <span className="grid__app margin">
                                <h1>Twitter</h1>
                                <button>GET</button>
                            </span>
                            <span className="grid__app margin">
                                <h1>Notability</h1>
                                <button>₹799</button>
                            </span>
                            <span className="grid__app margin">
                                <h1>NDTV</h1>
                                <button>GET</button>
                            </span>
                            <span className="grid__app margin">
                                <h1>Rummy</h1>
                                <button>₹179</button>
                            </span>
                        </div>
                    </section> */}
                   
                </div>
            </div>

       
    )
}

export default Tab
