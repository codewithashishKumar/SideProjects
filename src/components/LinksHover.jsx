import '../styles/linksHover.css'


function ArrowIcon() {
    return (
        <svg
            className='arrowSVG'
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}

export default function LinksHover() {
    return (
        <div className="links-container">
            <ul className="links-list">
                <li><a href="">Home</a> <ArrowIcon /></li>
                <li><a href="">Projects</a><ArrowIcon /></li>
                <li><a href="">About</a><ArrowIcon /></li>
                <li><a href="">Contact</a><ArrowIcon /></li>
            </ul>
        </div>
    );
}