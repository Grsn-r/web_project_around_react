export default function editAvatar() {
    return (
        <form className="popup__form" noValidate>
                <h3 className="popup__title">Cambiar foto de perfil</h3>
                <label className="popup__field">
                    <input className="popup__input" type="url" id="avatar-url" name="avatar-url" placeholder="Enlace a foto" minLength="2" required/>
                    <span id="avatar-url-error"></span>
                </label>
                <button type="submit" className="popup__button" id="form__save-button" disabled>Guardar</button>
        </form>
    )
}