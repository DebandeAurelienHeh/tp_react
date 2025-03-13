import "../App.jsx"


function Photos(props) {

    return(
        <>
            <h2> {props.author}</h2>
            <img src={ props.source} height={500} width={1000} alt="montagne"/>

        </>
    )
}
export default Photos;