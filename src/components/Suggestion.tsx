import { suggestionData } from "../data/helper"

function Suggestion() {
    return (
        <>
            {Object.values(suggestionData).map((data, index) => (
                <section key={index} className="flex flex-col sm:flex-row items-center text-center sm:text-left sm:gap-4 bg-[#efefef] p-4 sm:p-8 rounded-lg border-3 border-zinc-300 mb-2 sm:mb-4">
                    <img src={data.img} alt="images" width={80} height={80} />
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-2">{data.title}</h3>
                        <p className="text-lg leading-5 sm:leading-7 sm:text-xl">{data.text[0]}</p>
                        <p className="text-lg leading-5 sm:leading-7 sm:text-xl">{data.text[1]}</p>
                    </div>
                </section>
            ))}
        </>
    )
}

export default Suggestion