import './Home.css'
import pet from "../images/pet.jpg"

export default function Home (){
    return (
    <>
    <div class="flexbox-container">
        <p id="classname">Hi, I'm lynn! </p>
        <img src={pet} alt="React Image" id = "pet"/>
    </div>
    
    </>

) 
}

