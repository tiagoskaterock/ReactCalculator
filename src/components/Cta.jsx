import '../css/cta.css'
import { useState } from 'react'

function Cta() {

    const [count, setCount] = useState(1)

    function handleClick() {
        setCount(count + 1)
        alert('Congratulations! You are the subscriber number ' + count + ' on our Newsletter!!!')
    }

    return (
        <section className="text-center section-cta">
            <button className="btn btn-primary" onClick={handleClick}>
                <i className="fas fa-rss mr-1"></i>
                Subscribe me!
            </button>
        </section>        
    )
}

export default Cta
