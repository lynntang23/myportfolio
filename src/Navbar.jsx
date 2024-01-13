import './Navbar.css'
function NavigationBar(){
    return(
        <>    
            <nav>
               <h1 id= "name">
                   @lynntang
               </h1>
             <div>
               <ul id ="navbar">
                 <li><a href="#/Home">home</a> </li>
                 <li><a href="#/About">about</a></li>
                 <li><a href="#/ProfessionalExperience">experience</a></li>
                 <li><a href="#/MissionStatement">socials</a></li>
                 </ul>
             </div>
            </nav>
        </>
    )
}

export default NavigationBar