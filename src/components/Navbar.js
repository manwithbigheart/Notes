import './Navbar.css'

function Navbar()
{
    
    return (
    <nav class="navbar background">
        <div class="logo">
                <img src="res/images.jpeg" alt="logo"/>
        </div>
        <h2>Notes</h2>
        <ul class="nav-list">
            <li><a href="#Home" >Home</a></li>
            <li><a href="#Sevices" >Services</a></li>
            <li><a href="#Contact" >Contact</a></li>
            <li><a href="#About" >About</a></li>
        </ul>

        <div class="rightNav">
            <input class="btn btn-sm" placeholder='Search'/>
            <button class="btn btn_lg">Login</button>
        </div>
    </nav>   )
}
export default Navbar