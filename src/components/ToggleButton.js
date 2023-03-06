import '../style/ToggleButton.scss'

function ToggleButton () {
    
    return (
        <div class="theme-container shadow-dark">
            <button type="button" class="theme-button light-button" alt="Light Mode">
            </button>
            <button type="button" class="theme-button dark-button" alt="Dark Mode">
            </button>
            <button type="button" class="theme-button CSM-button" alt="ChainSawMan Mode">
            </button>
        </div>
    );
}
    

export default ToggleButton;