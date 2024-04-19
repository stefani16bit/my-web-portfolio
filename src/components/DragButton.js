import "./DragButton.css";

function DragButton({dragdown}) {
  const dragdownprop = dragdown == "true";

  function handleButtonClick() {
    window.scrollTo({top: dragdownprop ? 0 : document.body.scrollHeight, behavior: 'smooth'})
  }

  console.log(`"drag-up-button ${dragdownprop ? 'drag-down' : 'drag-up'}"`)

  return (
    <div className="drag-up-button-container">
      <button className={`drag-up-button ${dragdownprop ? 'drag-down' : 'drag-up'}`} onClick={handleButtonClick}>
        {dragdownprop ? "^" : "v"}
      </button>
    </div>
  );
}


export default DragButton;
