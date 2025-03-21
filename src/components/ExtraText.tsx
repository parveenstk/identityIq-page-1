interface Content {
    title: string | string[];
    text: string[];
};

function ExtraText({ content, className }: { content: Content, className?: string }) {
    return (
        <div className={`flex flex-col gap-1 mb-4 sm:mb-14 text-center sm:text-left ${className}`}>
            {Array.isArray(content.title) && content.title.length > 0 ? (
                content.title.map((data, i) => <h1 key={i} className="text-3xl sm:text-6xl font-bold" dangerouslySetInnerHTML={{ __html: data }} ></h1>)
            ) : (<h1 className="mb-0.5 sm:mb-0 text-3xl font-bold" dangerouslySetInnerHTML={{ __html: content.title }} ></h1>)}

            {content.text.map((text, index) => (
                <p key={index} className="leading-5 sm:leading-7 text-lg sm:text-xl" dangerouslySetInnerHTML={{ __html: text }}></p>
            ))}
        </div>
    )
}

export default ExtraText