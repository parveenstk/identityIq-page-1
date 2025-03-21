import { sourceData } from "../data/helper"

function Sources() {
    return (
        <section>
            <h1 className="font-bold text-center sm:text-left text-3xl mb-2 sm:mb-5">Sources</h1>
            {sourceData.map((data, index) => {
                return sourceData.length - 1 > index ? (
                    <li key={index} className="ml-2 sm:ml-3 text-[9px] sm:text-base underline"><a href={data.link} target="_blank">{data.text}</a></li>
                ) : (
                    <p dangerouslySetInnerHTML={{ __html: data.text }} key={index} className="sm:mt-4 sm:text-2xl"></p>
                )
            })}
        </section>
    )
}

export default Sources