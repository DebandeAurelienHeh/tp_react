import Photos from "./Photos.jsx";
import {useState} from "react";
import "../App.jsx"

function Gallery(props) {
    const title = "Gallerie de photos"
    const [hideId, setHideId] = useState(false); // État pour contrôler l'affichage des IDs

    return(
        <div>
            <h1>{title}</h1>

            <label>
                Masquer les IDs :
                <input
                    type="checkbox"
                    checked={hideId}
                    onChange={(e) => setHideId(e.target.checked)}
                />
            </label>

            {props.arrayPhoto.map(photo => (
                <Photos
                    key={photo.id}
                    source={photo.download_url}
                    id={photo.id}
                    author={photo.author}
                    hideId={hideId}
                />
            ))}
        </div>
    )
}
export default Gallery;