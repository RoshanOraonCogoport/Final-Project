import React ,{useState , useEffect} from "react";
import ReactDOM  from "react-dom";
// import './styles.css';
import img1 from './Imageimg.png';
// import './styles_signup.css';
// import './blog-display.css';
import './styles_create.css';


const App =  () => {
return(
    <>
    
    {/* <div>
        navbar
        <nav className="navbar">
            <div className="logo">Cogo-Blog</div>

            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                <div className="menu">
                    <li id="inner">Cogo-Blog</li>
                    <li><a href="">Home</a></li>
                    <li><a href="/">Create Blog</a></li>
                    <li><a href="/">My Blogs</a></li>
                    <li id="gone">
                        <button id="btn1">Log In</button>
                        <button id="btn2">Sign Up</button>
                    </li>
                </div>
            </ul>
            <div id="top-btn">
                <button id="btn1">Log In</button>
                <button id="btn2">Sign Up</button>
            </div>   
        </nav>

        banner
        <div id="banner">
            <span id="sp1">Our Blog</span><br />
            <span id="sp2">Resourses and insights</span><br/>
            <span id="sp3"> The latest industry news , interviews , technologies and resources.</span><br/>
        </div>  

        main display
        <div id="layout">
            <div id="main_display">
                <div className="left">
                        <input id="searching" type="text" placeholder="search"/><br/>
                        <span id="sp4">Blog Categories</span>
                        <ul id="list_main">
                            <li id="listing" >View All</li>
                            <li id="listing">Design</li>
                            <li id="listing" >Product</li>
                            <li id="listing">Software Development</li>
                            <li id="listing">Customer Sucess</li>
                            <li id="listing">Leadership</li>
                            <li id="listing">Management</li>
                        </ul>
                </div>
                <div className="grid-container">
                    <div>
                        <img src={img1} />
                        <br/>
                        <div id="writing">
                            <span id="sper1"> UX review presentations..........</span><br/>
                            <span id="sper2"> How do you create compelling presentations that wow your colleagues and impress your managers?</span><br/>
                            <a id="sper3" href="#">Read Po &#x21D7;</a>
                        </div>
                    </div>
                    <div>
                        <img src={img1} />
                        <br/>
                        <div id="writing">
                            <span id="sper1"> Heading 1</span><br/>
                            <span id="sper2"> small detail.....</span><br/>
                            <a id="sper3" href="#">Read Post</a>
                        </div>
                    </div>
                    <div>
                        <img src={img1} />
                        <br/>
                        <div id="writing">
                            <span id="sper1"> Heading 1 .....</span><br/>
                            <span id="sper2"> small detail.....</span><br/>
                            <a id="sper3" href="#">Read Post</a>
                        </div>
                    </div>
                    <div>
                        <img src={img1} />
                        <br/>
                        <div id="writing">
                            <span id="sper1"> Heading 1 .....</span><br/>
                            <span id="sper2"> small detail.....</span><br/>
                            <a id="sper3" href="#">Read Post</a>
                        </div>
                    </div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                </div>
            </div>
            <hr/>
            <div id="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#" className="active">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div>

        </div>

        <div className='section'>
            <div className='cont'>
                <div className='content'>
                    <div className='heading-text'>
                      <span className='heading'>Starting Writing Blogs Now!!!!</span><br/>
                     <span className='next-text'>Join over and start</span>
                    </div>
                    <div className='actions'>
                      <button className='btn-1'>Log In</button>
                      <button className='btn-2'>Sign Up</button>
                    </div>
                </div>
              </div>
              <hr id="hr2"/>
            </div> 

        <div id="footer">
                <div className="logo1">Cogo-Blog</div>
                <span id="ft"> &#169; 2077 United UI . Alright Reserved.</span>
        </div>

    </div> */}

    {/* signup */}
    {/* <nav className="navbar-signup">
            <div className="logo5">Cogo-Blog</div>
            <div id="top-texts">
                <span id="text-tp">Already have an account? </span>
                <a id="link-2" href="#">Log In</a>
            </div>   
        </nav>

        <div id="gapp"></div>
        <div id="body-signup">
            <form action="/register" method="post">
                <h1 className="heading-signup">Sign Up for your Account</h1>
                <h2 className="heading-sub">Register Now! Please enter your Details.</h2>

                <div className="form-floating">
                    <label id="signup-tp-head" for="username" >Username</label>
                    <input type="text" className="form-control" name='username' id="username" placeholder="Enter your username.."/>
                </div>

                <div className="form-floating">
                    <label id="signup-tp-head" for="email" >Email address</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Enter your Email.."/>
                </div>

                <div className="form-floating">
                    <label id="signup-tp-head" for="password" >Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password.."/>
                </div>

                <div className="form-floating">
                    <label id="signup-tp-head" for="profile_pic" >Profile Pic</label>
                    <input type="text" className="form-control" name="profile_pic" id="profile_pic" placeholder="Enter your pic url.."/>
                </div>

                <div className="form-floating">
                    <button className="sign-up-btn" type="submit">Sign Up</button>
               </div>
               
            </form>
            <div id="top-texts2">
                <span id="text-tp">Already have an account? </span>
                <a id="link-2" href="#">Sign Up</a>
            </div> 
        </div> */}

        {/* login */}
        {/* <nav className="navbar-login">
            <div className="logo5">Cogo-Blog</div>
            <div id="top-texts">
                <span id="text-tp">Don't have an account? </span>
                <a id="link-2" href="#">Sign Up</a>
            </div>   
        </nav>

        <div id="gapp"></div>
        <div id="body-login">
            <form action="/register" method="post">
                <h1 className="heading-login">Log in to your Account</h1>
                <h2 className="heading-sub">Welcome Back! Please enter your Details.</h2>

                <div className="form-floating">
                    <label id="signup-tp-head" for="username" >Username</label>
                    <input type="text" className="form-control" name='username' id="username" placeholder="Enter your username.."/>
                </div>

                <div className="form-floating">
                    <label id="signup-tp-head" for="password" >Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password.."/>
                </div>

                <div className="form-floating">
                    <button className="log-in-btn" type="submit">Log In</button>
               </div>
               
            </form>
            <div id="top-texts2">
                <span id="text-tp">Don't have an account? </span>
                <a id="link-2" href="#">Sign Up</a>
            </div> 
        </div> */}


        {/* blog display */}
        {/* <div id="blog-display">
            <nav className="navbar">
                <div className="logo">Cogo-Blog</div>

                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="menu">
                        <li id="inner">Cogo-Blog</li>
                        <li><a href="">Home</a></li>
                        <li><a href="/">Create Blog</a></li>
                        <li><a href="/">My Blogs</a></li>
                        <li id="gone">
                            <button id="btn1">Log In</button>
                            <button id="btn2">Sign Up</button>
                        </li>
                    </div>
                </ul>
                <div id="top-btn">
                    <button id="btn1">Log In</button>
                    <button id="btn2">Sign Up</button>
                </div>   
            </nav>
            <div id="gapp"></div>

            <div id="info">
                <span id="na1">categories</span><br/>
                <span id="na2">Title</span><br/>
                <span id="na3">username</span><br/>
                <div id="come">
                    <img id="na4" src={img1} /><br/>
                    <div id="tt">
                        <span id="na5">name</span><br/>
                        <span id="na6">date</span><br/>
                    </div>
                </div>
                
            </div>

            <div id="banner-display">
                <img id="banner-img"  src={img1}/>
            </div>

            <div id="aa">
                <div id="info-display">
                    <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quam corporis eius, architecto ipsam commodi, neque nihil voluptate exercitationem consequatur sit facilis incidunt, laboriosam blanditiis. Maxime, veritatis ipsa? Cumque cum enim quisquam, voluptatibus quaerat quibusdam praesentium,<br/> ipsam atque debitis sunt error assumenda eius recusandae nisi quae necessitatibus laudantium soluta, dignissimos quod incidunt quia. Rem recusandae porro voluptate mollitia unde aspernatur magni id impedit, consequuntur et, maiores aut, sit officiis itaque! Impedit ut voluptate ad quos ipsam reiciendis, aut illum nesciunt vel? Eveniet dolores provident, debitis quas non quod doloribus unde quo asperiores, perferendis nulla soluta pariatur ex a dolorum doloremque enim deleniti totam laudantium quae ipsum id aliquid ut fuga! Ex, laborum ipsa quia cumque praesentium eveniet. Harum atque laborum nam iusto fugit obcaecati maxime illum sint illo laudantium. Commodi ipsa pariatur rem natus qui cum voluptas exercitationem blanditiis sapiente nihil consequatur accusamus cupiditate dicta quam distinctio porro ducimus quos dolores, libero repellat. Ex quas amet, soluta nisi cumque delectus quidem fugit, doloremque veniam laudantium fuga vitae voluptatum numquam, voluptatibus inventore officiis quo earum enim ad. Placeat, laudantium autem. Nesciunt voluptatibus asperiores cum ab magni accusamus mollitia aspernatur vel quos, perferendis facere natus neque dolore nisi adipisci aliquid fuga expedita.
                    </span>
                </div>
            </div>

            <div className='section'>
                <div className='cont'>
                    <div className='content'>
                        <div className='heading-text'>
                        <span className='heading'>Starting Writing Blogs Now!!!!</span><br/>
                        <span className='next-text'>Join over and start</span>
                        </div>
                        <div className='actions'>
                        <button className='btn-1'>Log In</button>
                        <button className='btn-2'>Sign Up</button>
                        </div>
                    </div>
                </div>
                <hr id="hr2"/>
                </div> 

            <div id="footer">
                    <div className="logo1">Cogo-Blog</div>
                    <span id="ft"> &#169; 2077 United UI . Alright Reserved.</span>
            </div>

        </div> */}

        {/* create blog */}
        <div>
        <nav className="navbar">
                <div className="logo">Cogo-Blog</div>

                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="menu">
                        <li id="inner">Cogo-Blog</li>
                        <li><a href="">Home</a></li>
                        <li><a href="/">Create Blog</a></li>
                        <li><a href="/">My Blogs</a></li>
                        <li id="gone">
                            <button id="btn1">Log In</button>
                            <button id="btn2">Sign Up</button>
                        </li>
                    </div>
                </ul>
                <div id="top-btn">
                    <button id="btn1">Log In</button>
                    <button id="btn2">Sign Up</button>
                </div>   
            </nav>
            <div id="gapp"></div>
            <div id="containment">
                <div id="so">
                    <label id="t-head" for="title1" >Title : </label>
                    <input type="text" className="form-control" name='title1' id="blog-title" placeholder="Enter your title.."/>
                </div >
                <div id="so">
                    <label id="t-head" for="sd" >Short Description : </label>
                    <input type="text" className="form-control" name='sd' id="blog-sd" placeholder="Enter your Description.."/>
                </div>
                <div id="so">
                    <label id="t-head" for="thumbnail" >Thumbnail URL : </label>
                    <input type="text" className="form-control" name='thumbnail' id="blog-thumbnail" placeholder="Enter your thumbnail url.."/>
                </div>
                <div id="so">
                    <label id="t-head" for="content1" >Categories : </label>
                    <select id="cats" name="categories">
                        <option value="Design">Design</option>
                        <option value="Product">Product</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Customer Sucess">Customer Sucess</option>
                        <option value="Leadership">Leadership</option>
                        <option value="Management">Management</option>
                    </select>
                </div>
                <div id="so">
                    <label id="t-head" for="content1" >Content : </label>
                    <input type="text" className="form-control1" name='content1' id="blog-content"/>
                </div>
                <div id="so">
                    <button id="sub-btn" >Add Post</button>
                </div>
            </div>
            <hr />
            <div id="footer">
                    <div className="logo1">Cogo-Blog</div>
                    <span id="ft"> &#169; 2077 United UI . Alright Reserved.</span>
            </div>        
        </div>


    </>
);
}
ReactDOM.render(<App />,document.getElementById("root"));