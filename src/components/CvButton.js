import "../style/CvButton.scss";
import cvPDF from "../assets/img/cv.pdf";

function CvButton() {
  return (
    <div className="container">
      <div className="cv-button fixed z-10 font-bold bg-[#283035] hover:bg-[#303A40] px-4 py-4 text-[#fff] hover:text-[#C72931] border-4 border-[#C72931] rounded-md">
        <a href={cvPDF} target="_blank" rel="noopener noreferrer">
          <button>DOWNLOAD C.V</button>
        </a>
      </div>
    </div>
  );
}

export default CvButton;