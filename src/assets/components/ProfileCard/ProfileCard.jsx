import './ProfileCard.css'
const ProfileCard = ({name, job, bio, img}) => {
    return( 
        <div className='container-card'>
            <img src={img} alt="Image do profissional" className="card-img" /> 
            <div className="info ">
                <h2>{name}</h2>
                <h3>{job}</h3> 
                <p>{bio}</p>
            </div>
        </div>
    ) 
}

export { ProfileCard }  