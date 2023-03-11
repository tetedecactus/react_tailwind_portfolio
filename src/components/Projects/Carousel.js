import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import images from "../../../module/Images";


export default function Carousel ({ 
	children: slides, 
	autoSlide=false,
	autoSlideInterval = 3000,
 	}) {
    const [curr, setCurrent] = useState(0)

    const prev = () => setCurrent((curr) => (curr=== 0 ? slides.lenght - 1 : curr - 1));
    const next = () => setCurrent((curr) => (curr=== slides.lenght - 1 ? 0 : curr + 1));

	useEffect(() => {

	}, [])
    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" 
				style={{ transform: `translateX(-${curr * 100}%)`}}>{slides}
            </div>
			<div className="absolute inset-0 flex items-center justify-between p-4">
				<button className="p-1 rounded-full">
					<ChevronLeft onCLick={prev} size={40} />
				</button>
				<button className="p-1 rounded-full">
					<ChevronRight onCLick={next} size={40} />
				</button>
			</div>
			<div>
				
			</div>
        </div>
    );
}