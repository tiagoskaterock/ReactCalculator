import '../css/profile.css'

function Profile(props) {
    return (
        <div className='profile col-md-4'>
            <img src={props.img} alt={props.title} title={props.title} className='profile-img' />
            <h2 className='text-center my-3'>{props.title}</h2>
            <p className='profile-description'>
                <span className='bloquote fst-italic text-center px-3'>
                    "{props.description}"
                </span>
            </p>
        </div>
    )
}

export default Profile
