import './Navbar.css'
function NavigationBar(){
    return(
        <>    
            <nav>
               <h1 id= "name">
                   Lynn Tang
               </h1>
             <div>
               <ul id ="navbar">
                 <li><a href="#/Home">Home</a> </li>
                 <li><a href="#/About">About</a></li>
                 <li><a href="#/ProfessionalExperience">Professional Experience</a></li>
                 <li><a href="#/MissionStatement">Mission Statement</a></li>
                 </ul>
             </div>
            </nav>
        </>
    )
}

export default NavigationBar