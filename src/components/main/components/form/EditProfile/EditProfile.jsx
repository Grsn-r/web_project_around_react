export default function EditProfile() {
    return (
    <form className="popup__form" noValidate>
      <h3 className="popup__title">Editar Perfil</h3>
      <label className="popup__field"><input 
        className="popup__input" 
        id="name" 
        type="text" 
        placeholder="Nombre" 
        minLength="2" 
        maxLength="20" 
        required
      />
      <span className="popup__error" id="name-error"></span>
      </label>
      <label className="popup__field">
        <input 
        className="popup__input" 
        id="about" 
        type="text" 
        placeholder="Acerca de mi" 
        minLength="2" 
        maxLength="200" 
        required
      />
      <span className="popup__error" id="about-error"></span>
      </label>
      
      <button 
        type="submit" 
        className="popup__button" 
        id="form__save-button" 
        disabled
      >
        Guardar
      </button>
    </form>
    )
}