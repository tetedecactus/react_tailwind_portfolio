

function ToggleButton () {

    const toggleButton = document.querySelector('.toggle-button');
    
    toggleButton.addEventListener('click', () => {
      if ($color-scheme == $light-mode) {
        $color-scheme: $dark-mode;
      } else {
        $color-scheme: $light-mode;
      }
    }); 
    
    return (
        <div className="container">
            <button class="toggle-button">Toggle Dark Mode</button>
        </div>
    );
}

export default ToggleButton;
