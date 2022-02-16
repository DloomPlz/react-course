function Modal(props){

    function cancelHandler(){
        props.onCancel();
    }

    function confirmHandler(){
        props.onConfirm();
    }
    return <div className="modal">
        <p>u sure</p>
        <button className="btn btn--alt" onClick={cancelHandler}>no lol</button>
        <button className="btn" onClick={confirmHandler}>yes</button>
    </div>
}

export default Modal;