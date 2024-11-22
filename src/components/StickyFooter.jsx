import './StickyFooter.css'

// relies on .app-container and .content-wrap in App.css

function StickyFooter() {
    return (
        <>
            <footer className='sticky-footer' id="footer">
                <p>made with love by <a href="https://www.linkedin.com/in/daumphil" target="_blank" rel="noopener noreferrer">Phil</a></p>
            </footer>
        </>
    )
}

export default StickyFooter