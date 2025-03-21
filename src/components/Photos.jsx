import "../App.jsx"

function Photos(props) {
    return(
        <>
            <div>
                <h2>{props.author}{!props.hideId && ` (${props.id})`}</h2>
            </div>
            <img
                src={props.source}
                height={500}
                width={1000}
                alt="montagne"
            />
        </>
    )
}
export default Photos;