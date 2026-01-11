import './index.css'
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import api from './utils/api';
import {useState, useEffect} from 'react'
import CurrentUserContext from './context/CurrentUserContext';
import ImagePopup from './components/main/components/ImagePopup/ImagePopup'


function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
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

    const handleUpdateAvatar = (data) => {
    (async () => {
    await api.setUserAvatar(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
    })();
};

    
    function handleImageClick(imageData) {
    const imagePopup = {
    title: null,
    children: <ImagePopup card={imageData} />
    };
    setPopup(imagePopup);
  }

  function handleOpenPopup(popup) {
      setPopup(popup);
    };
  
  
  function handleClosePopup() {
      setPopup(null)
    };

  useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setCurrentUser(data);
    })
    .catch((error) => console.error(error));
  }, []);

  const handleUpdateUser = (data) => {
    (async () => { await api.setUserInfo(data).then((newData) => {
      setCurrentUser(newData);
      handleClosePopup();
    });
   })();
  };

  return (
<div className="page">
  <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar}}>
    <Header />
    <Main cards={cards}
    onOpenPopup={handleOpenPopup}
    onClosePopup={handleClosePopup}
    onCardLike={handleCardLike}
    onCardClick={handleImageClick}
    onCardDelete={handleCardDelete}
    popup={popup}/>
    <Footer />
  </CurrentUserContext.Provider>
</div>
  );
}

export default App