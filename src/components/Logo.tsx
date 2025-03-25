import { links } from "../../data/helper"

function Logo() {
    return (
        <div className="flex items-center sm:gap-6">
            {Array.isArray(links) && links.length > 0 ? (
                links.map((data, index) => (
                    <div key={index} className="px-1">
                        <img className="sm:w-48 w-26" key={index} src={data} alt="company's logo" />
                    </div>
                ))
            ) : (
                <p>No more links available.</p>
            )}
        </div>
    )
}

export default Logo