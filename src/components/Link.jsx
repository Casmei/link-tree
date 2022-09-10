
export default function Link ({text, url, logo}) {
    return (
        <>
            <a
                className="link-button"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="w-10 h-10" src={logo}/>
                <span className="text-gray-300 font-semibold text-xl select-none">{text}</span>
            </a>
        </>
    )
}
