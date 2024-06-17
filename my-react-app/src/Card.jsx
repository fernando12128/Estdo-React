import profilePic from './assets/Ursinho.jpg'

function Card(){
    return(
        <div className="card">
            <img className='cardImg' src={profilePic} alt="Profile picture" />
            <h2 className='card-title'>F</h2>
            <p className='card-text'>Estou triste quero comer um docezaum poremmmm medo</p>
        </div>
    );
}

export default Card