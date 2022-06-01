export default function AddButton(props){
    return(
        <div>
            <div className='buttons'>
                <button name="CreateNote" key="CreateNote" className='newnote' onClick={props.handleClick}>+</button>
            </div>
        </div>
    )
}