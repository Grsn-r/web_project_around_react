export default function NewCard() {
    return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
    >
        <h3 className="popup__title">Nuevo Lugar</h3>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="2"
          name="card-name"
          placeholder="Título"
          required
          type="text"
        />
        <span className="popup__error" id="card-name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Enlace a imagen"
          required
          type="url"
        />
        <span className="popup__error" id="card-link-error"></span>
      </label>
      <button className="popup__button" type="submit">
        Crear
      </button>
    </form>
    )
}