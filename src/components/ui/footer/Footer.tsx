import "styles/ui/footer/Footer.css"

type FooterProps = {
    isDarkTheme?: boolean
}

function Footer({ isDarkTheme = false }: FooterProps) {
    return (
        <div className="footer" data-dark-theme={isDarkTheme}>
            Copyright &copy; CPU 2025 All rights reserved.
        </div>
    )
}

export default Footer