import { logoImages } from "../data/helper"

function Logo() {
    return (
        <div className="flex gap-2 sm:gap-4 justify-center mb-2 sm:mb-10 max-w-full ">
            {logoImages.map((image, index) => (
                <img src={image} alt="brand-logo-image" className="w-21 h-21 sm:h-44 sm:w-1/5" key={index}/>
            ))}
        </div>
    )
}
export default Logo