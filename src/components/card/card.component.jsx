import './card.style.css'

const Card = ({monster}) => {

    const {name, email, id} = monster

    return (
    <div className="card-container" key={id}>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        <h1 key={id}>{name}</h1>
        <p>{email}</p>
    </div>
    )
}

export default Card