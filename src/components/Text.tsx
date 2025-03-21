
function Text({ data, className }: { data: { title: string; content: { img?: string; text: string[] } }, className?: string }) {
    return (
        <section className={`${className}`} >
            <h1 className="sm:text-3xl text-lg text-center leading-6 mb-2 sm:leading-9 sm:text-left sm:mb-4" dangerouslySetInnerHTML={{ __html: data.title }}></h1>
            {Array.isArray(data.content.text) && data.content.text.length > 0 ? (
                data.content.text.map((text, index) => (
                    <div key={index} className="flex ml-10 sm:ml-0 gap-2 items-center w-fit">
                        { data.content.img && <img src={data.content.img} className="sm:w-6 sm:h-6" alt="image" width={18} height={18} />}
                        <div key={index} className="text-lg sm:text-xl leading-5 sm:leading-7" dangerouslySetInnerHTML={{ __html: text }}></div>
                    </div>
                ))) : (
                <p className="text-2xl">{data.content.text[0]}</p>
            )}
        </section>
    )
}

export default Text