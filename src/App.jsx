import './index.css'
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import api from './utils/api';
import {useState, useEffect} from 'react'
import CurrentUserContext from './context/CurrentUserContext';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);

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
      handleClosePopup();
    })
    .catch((error) => console.error(error));
  }, []);

  const handleUpdateUser = (data) => {
    (async () => { await api.setUserInfo(data).then((newData) => {
      setCurrentUser(newData);
    });
   })();
  };

  return (
<div className="page">
  <CurrentUserContext.Provider value={{currentUser, handleUpdateUser}}>
    <Header />
    <Main onOpenPopup={handleOpenPopup}
    onClosePopup={handleClosePopup}
    popup={popup}/>
    <Footer />
  </CurrentUserContext.Provider>
</div>
  );
}

export default App