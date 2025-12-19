import editAvatarBtn from '../../images/edit_avatar_btn.png'
import editButton from '../../images/edit-button.png'
import avatar from '../../images/avatar.jpg'
import addButton from '../../images/add-btn-img.png'
import '../../index.css'

function Main() {
    return (
        <main>
            <section className="profile">
            <div className="profile__avatar-container"> <img className="profile__avatar" src={avatar} alt="foto de perfil"/>
            <img className="profile__avatar_edit" src={editAvatarBtn} alt="editar foto"/></div>
            <div className="profile__info">
                <p className="profile__info profile__info_name"></p>
                <p className="profile__info profile__info_explorer"></p>
            </div>
            <img className="edit-button" src={editButton} alt="boton de editar"/>
            <div className="profile__add-button">
                <img className="profile__add-button profile__add-button_img" src={addButton} alt="boton de añadir"/>
            </div>
            </section>
            <section className="elements">
            </section>
        </main>
    )
}

export default Main;