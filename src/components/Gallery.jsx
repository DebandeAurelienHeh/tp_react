import "../App.jsx"
import "./Photos.jsx"
import Photos from "./Photos.jsx";


function Gallery(props) {
    const title = "Gallerie de photos"
    //let sizeHeight = 300;
    //let sizeWidth = 500;

    return(
        <div>
            <h1>{ title }</h1>

            {/*<Photos sizeHeight={ sizeHeight } sizeWidth={ sizeWidth } id={ 2 }/><Photos sizeHeight={ sizeHeight } sizeWidth={ sizeWidth } id={ 1 }/>*/}


            {props.arrayPhoto.map(photo => (
                    <Photos source = { photo.download_url } sizeHeight={ photo.height } sizeWidth={ photo.width } author={ photo.author } />
            ))}
        </div>


    );
}
export default Gallery;