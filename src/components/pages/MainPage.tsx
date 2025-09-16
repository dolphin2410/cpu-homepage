import "styles/pages/MainPage.css"
import downscroll from "assets/downscroll.svg"
import Footer from "components/ui/footer/Footer"

function MainPage() {
    return (
        <div className="ui-container mainpage">
            <div className="mainpage-section mainpage-head-section">
                <h1 className="mainpage-head-title">
                    <span className="mainpage-mini-title">
                        정보과학동아리
                    </span>
                    <span className="mainpage-main-title">
                        CPU
                    </span>
                </h1>
                <p className="mainpage-quotes">
                    <h3 className="mainpage-quotes-content">Those who can imagine anything, can create the impossible.</h3>
                    <h3 className="mainpage-quotes-source">Alan Turing</h3>
                </p>
            </div>
            <div className="mainpage-section mainpage-recruit-section" data-dark-theme>
                <h1 className="mainpage-section-title">
                    <span className="mainpage-section-title-text">
                        WE RECRUIT
                        <span className="mainpage-section-title-underline"></span>
                    </span>
                </h1>
                <div className="mainpage-recruit-group">
                    <h1 className="mainpage-recruit-group-title">17기</h1>
                    <div className="mainpage-recruit-group-contents">0명</div>
                </div>
                <div className="mainpage-recruit-group">
                    <h1 className="mainpage-recruit-group-title">18기</h1>
                    <div className="mainpage-recruit-group-contents">0명</div>
                </div>
                <div className="mainpage-recruit-group">
                    <h1 className="mainpage-recruit-group-title">19기</h1>
                    <div className="mainpage-recruit-group-contents">10명</div>
                </div>
            </div>
            <div className="mainpage-section mainpage-seminar-section">
                <h1 className="mainpage-section-title">
                    <span className="mainpage-section-title-text">
                        SEMINAR
                        <span className="mainpage-section-title-underline"></span>
                    </span>
                </h1>
                <div className="mainpage-section-container" data-section-first>
                    <img className="mainpage-section-image" src="https://placehold.co/500" alt="" />
                </div>
                <div className="mainpage-section-body" data-section-last>
                    <h1 className="mainpage-section-body-title">Empowering Knowledge on AI & Data Science</h1>
                    <p className="mainpage-section-body-paragraph">Cool and Amazing Things</p>
                </div>
            </div>
            <div className="mainpage-section mainpage-activities-section" data-dark-theme>
                <h1 className="mainpage-section-title">
                    <span className="mainpage-section-title-text">
                        ACTIVITIES
                        <span className="mainpage-section-title-underline"></span>
                    </span>
                </h1>
                <div className="mainpage-section-body" data-section-first>
                    <h1 className="mainpage-section-body-title">Participate in School Festivals</h1>
                    <p className="mainpage-section-body-paragraph">Cool and Amazing Things</p>
                </div>
                <div className="mainpage-section-container" data-section-last>
                    <img className="mainpage-section-image" src="https://placehold.co/500" alt="" />
                </div>
            </div>
            <div className="mainpage-section mainpage-projects-section">
                <h1 className="mainpage-section-title">
                    <span className="mainpage-section-title-text">
                        PROJECTS
                        <span className="mainpage-section-title-underline"></span>
                    </span>
                </h1>
                <div className="mainpage-section-container" data-section-first>
                    <img className="mainpage-section-image" src="https://placehold.co/500" alt="" />
                </div>
                <div className="mainpage-section-body" data-section-last>
                    <h1 className="mainpage-section-body-title">Projects to Realize Your Ideas</h1>
                    <p className="mainpage-section-body-paragraph">Cool and Amazing Things</p>
                </div>
            </div>
            <div className="mainpage-downscroll-help">
                <img src={downscroll} alt="" />
            </div>
            <Footer isDarkTheme />
        </div>
    )
}

export default MainPage