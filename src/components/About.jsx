import SectionTitle from "./SectionTitle"
import "../css/about.css"

function About() {
    return (
        <section className="section-dark py-5 section-about">
            <div className="container">
                <div className="row">
                    <SectionTitle title="About" />
                    <div className="col-md-6">
                        <img src="img/about/1.jpg" alt="Happy People" className="about-img" />
                    </div>
                    <div className="col-md-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit culpa maxime, expedita iusto, cum tenetur facere rem sit accusantium vero atque eveniet eligendi ea incidunt porro, reprehenderit consequatur. Eveniet?</p>
                        <p>Iste nemo rem adipisci obcaecati, in error deserunt distinctio ipsam hic nostrum odio nobis alias recusandae ducimus porro rerum eum optio quia tenetur ullam mollitia velit minima libero? Debitis, quo.</p>
                        <p>Non, ad adipisci reprehenderit aut quibusdam magnam, esse voluptatem nesciunt vitae quidem deleniti eligendi minima nostrum beatae impedit enim! Vitae incidunt optio ab quos corporis officia harum nisi iure officiis!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About