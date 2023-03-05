import "../style/CvButton.scss";
import cvPDF from "../assets/img/cv.pdf";

function CvButton() {
  return (
    <div className="container">
      <div className="cv-button fixed z-10 font-bold px-4 py-4 rounded-md">
        <a href={cvPDF} target="_blank" rel="noopener noreferrer">
          <button>DOWNLOAD C.V</button>
        </a>
      </div>
    </div>
  );
}

export default CvButton;
