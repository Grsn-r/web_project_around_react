export default function Popup(props) {
    const {title, children} = props;
    return (
        <div className="popup">
            <div className="popup__content">
                <button type="button" className="popup__close" aria-label="Close modal" />
                <h3 className="popup__title">{title}</h3>
                {children}
            </div>
        </div>
    )
}