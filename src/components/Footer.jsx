import '../css/footer.css'
import Title from './Title'

function Footer() {
    return (
        <footer>
            <span>
                {new Date().getFullYear()} - Developed by an Amazing Developer - <Title />
            </span>
        </footer>
    )
}

export default Footer
