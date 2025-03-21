import { paraData } from "../data/helper"

function Paragraph() {
    return (
        <>
            {Object.values(paraData).map((data, index) => (
                index % 2 === 0 ? (
                    <section key={index} className="w-full mb-3 sm:mb-14">
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <img src={data.content.img} alt="image" width={400} height={226} className="h-fit sm:w-1/2" />
                            <div className="flex flex-col gap-1 text-center sm:text-left sm:w-1/2">
                                <h1 className="text-[1.8rem] font-bold">{data.title}</h1>
                                {Array.isArray(data.content.text1) && data.content.text1.map((text: string, i: number) => (
                                    <p key={i} className="leading-5 sm:leading-[29px] text-lg sm:text-[1.3rem]" dangerouslySetInnerHTML={{ __html: text }}></p>
                                ))}
                            </div>
                        </div>
                        {data.content.text2 && Array.isArray(data.content.text2) && data.content.text2.map((text: string, i: number) => (
                            <div key={i} className="leading-6 sm:leading-[29px] text-center sm:text-left text-lg sm:text-[1.3rem]" dangerouslySetInnerHTML={{ __html: text }}></div>
                        ))}
                    </section>
                ) : (
                    <section key={index} className="w-full mb-3 sm:mb-14">
                        <div className="text-center sm:text-left flex flex-col-reverse sm:flex-row gap-4">
                            <div className="flex flex-col gap-1 sm:w-1/2">
                                <h1 className="text-[1.8rem] font-bold">{data.title}</h1>
                                {Array.isArray(data.content.text1) && data.content.text1.map((text: string, i: number) => (
                                    <p key={i} className="leading-5 sm:leading-[29px] text-lg sm:text-[1.3rem]" dangerouslySetInnerHTML={{ __html: text }}></p>
                                ))}
                            </div>
                            <img src={data.content.img} alt="image" width={400} height={226} className="h-fit sm:w-1/2" />
                        </div>
                        {data.content.text2 && Array.isArray(data.content.text2) && data.content.text2.map((text: string, i: number) => (
                            <div key={i} className="leading-5 sm:leading-[29px] text-lg sm:text-[1.3rem]" dangerouslySetInnerHTML={{ __html: text }}></div>
                        ))}
                    </section>
                )

            ))}
        </>
    )
}

export default Paragraph