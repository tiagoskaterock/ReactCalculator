import Profile from "./Profile"
import SectionTitle from "./SectionTitle"
import '../css/main.css'
import team from "../arrays/team"

function Team() {
    return (
        <section className="section-light py-5">
            <div className="container">
                <div className="row">
                    <SectionTitle title="People" />
                    {
                        team.map(person =>
                            <Profile 
                                key={person.key} 
                                img={person.img} 
                                title={person.title} 
                                description={person.description} 
                            />    
                        )
                    }
                </div>
            </div>
        </section>        
    )
}

export default Team
