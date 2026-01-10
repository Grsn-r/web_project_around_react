
export default function Card(props) {
    
    const {card, onCardClick, onCardLike, onCardDelete} = props;
    const {name, link, isLiked} = card;
    
    const imageComponent = {
        name,
        link
    };


    const cardLikeButtonClassName = `card__like-button ${
    isLiked ? 'card__like-button_is-active' : ''
    }`;

    const handleLikeClick = () => {
        onCardLike(card);
    };

    const handleDeleteClick = () => {
        onCardDelete(card);
    }

    return (
        <li className="card">
                <button type="button" aria-label="Delete Card" className="card__erase-button" onClick={handleDeleteClick}/>
                <img className="card__img" src={link} id="user-img" alt={name} onClick={() => onCardClick(imageComponent)}/>
                <div className="card__ftr">
                    <p id="new-card-title">{name}</p>
                    <button className={cardLikeButtonClassName} type="button" aria-label="Like Card" onClick={handleLikeClick}/>
                </div>
        </li>
    )
}