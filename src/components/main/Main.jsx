import { useState, useEffect, useContext } from 'react'
import Card from './components/Cards/Card'
import Popup from './components/popup/Popup'
import ImagePopup from './components/ImagePopup/ImagePopup'
import EditProfile from './components/form/EditProfile/EditProfile'
import EditAvatar from './components/form/Avatar/EditAvatar'
import NewCard from './components/form/NewCard/NewCard'
import editAvatarBtn from '../../images/edit_avatar_btn.png'
import editButton from '../../images/edit-button.png'
import avatar from '../../images/avatar.jpg'
import addButton from '../../images/add-btn-img.png'
import '../../index.css'
import api from '../../utils/api'
import CurrentUserContext from '../../context/CurrentUserContext'

export default function Main({onOpenPopup, onClosePopup, popup}) {
    const {currentUser} = useContext(CurrentUserContext);
    const [cards, setCards] = useState([]);


  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    await api.likeCard(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((currentCard) => 
        currentCard._id === card._id ? newCard : currentCard ));
      })
      .catch((error) => console.error(error));
    };

    async function handleCardDelete(card) {
      api.eraseCard(card._id).then(() =>{
        setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
      }). catch((error) => console.error(error));
    }

    useEffect(() => {
      api.getCardList()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((error) => console.error(error));
    }, []);

    const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
    const editProfilePopup = { title: "Editar perfil", children: <EditProfile />};
    const editAvatarPopup = { title: "Editar avatar", children: <EditAvatar />};

    function handleImageClick(imageData) {
    const imagePopup = {
    title: null,
    children: <ImagePopup card={imageData} />
    };
    setPopup(imagePopup);
  }

    return (
        <main>
            <section className="profile">
            <div className="profile__avatar-container"> <img className="profile__avatar" src={avatar} alt="foto de perfil"/>
            <img className="profile__avatar_edit" src={editAvatarBtn} alt="editar foto" onClick={() => onOpenPopup(editAvatarPopup)}/></div>
            <div className="profile__info">
                <p className="profile__info profile__info_name">{currentUser.name}</p>
                <p className="profile__info profile__info_explorer">{currentUser.about}</p>
            </div>
            <img className="edit-button" src={editButton} alt="boton de editar" onClick={() => onOpenPopup(editProfilePopup)}/>
            <div className="profile__add-button"onClick={() => onOpenPopup(newCardPopup)}>
                <img className="profile__add-button profile__add-button_img" src={addButton} alt="boton de añadir" />
            </div>
            </section>
            <section>
              <ul className='card__list'>
                {cards.map((card) => (
                  <Card key={card._id}
                  card={card} 
                  onCardClick={handleImageClick} 
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}/>
                ))}
              </ul>
            </section>
            {popup && (<Popup 
             onClose={onClosePopup} 
             title={popup.title}>
                 {popup.children} 
                 </Popup>
             )}
        </main>
    )
}
