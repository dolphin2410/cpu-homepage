import "styles/pages/MainPage.css"
import downscroll from "assets/downscroll.svg"
import Footer from "components/ui/footer/Footer"
import vision from "assets/vision.png"
import rocket from "assets/rocket.png"
import { useEffect, useRef } from "react"

function MainPage() {
    const appRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (appRef.current) {
            const _appRef = appRef.current
            _appRef.addEventListener('scroll', () => {
                const scrollTop = _appRef.scrollTop;

                if (scrollTop >= window.innerHeight * 5 + 1) {
                    (document.querySelector(".mainpage-downscroll-help")!! as HTMLElement).style["display"] = "none"
                } else {
                    (document.querySelector(".mainpage-downscroll-help")!! as HTMLElement).style["display"] = "flex"
                }
            })
        }
    }, [appRef])

    return (
        <div className="ui-container mainpage" ref={appRef}>
            <div className="mainpage-section mainpage-head-section">
                <h1 className="mainpage-head-title">
                    <span className="mainpage-mini-title">
                        정보과학동아리
                    </span>
                    <span className="mainpage-main-title">
                        CPU
                    </span>
                </h1>
                <div className="orbit">
                    <img className="rocket" src={rocket} alt="" />
                </div>
            </div>
            <div className="mainpage-section mainpage-quotes-section" data-dark-theme>
                <h1 className="mainpage-section-title">
                    <span className="mainpage-section-title-text">
                        VISION & VALUES
                        <span className="mainpage-section-title-underline"></span>
                    </span>
                </h1>
                <div className="mainpage-section-container" data-section-first>
                    <img className="mainpage-section-image" src={vision} width={500} alt="" />
                </div>
                <div className="mainpage-section-body" data-section-last>
                    <h1 className="mainpage-quotes mainpage-section-body-title">
                        <h3 className="mainpage-quotes-content">Those who can imagine anything, can create the impossible.</h3>
                        <h3 className="mainpage-quotes-source">Alan Turing</h3>
                    </h1>
                    <p className="mainpage-section-body-paragraph">
                        CPU는 끊임 없이 도전하고, 동료와 협력하며, 새로운 것을 두려워하지 않는 학생과 함께하고 싶습니다.
                    </p>
                </div>
            </div>
            <div className="mainpage-section mainpage-recruit-section">
                <h1 className="mainpage-section-title">
                    <span className="mainpage-section-title-text">
                        WE RECRUIT
                        <span className="mainpage-section-title-underline"></span>
                    </span>
                </h1>
                <div className="mainpage-recruit-group">
                    <h1 className="mainpage-recruit-group-title">17기</h1>
                    <div className="mainpage-recruit-group-contents">
                        <span className="mainpage-recruit-group-contents-to">-명</span>
                        <span className="mainpage-recruit-group-contents-link" data-deactivated>지원하기&rarr;</span>
                    </div>
                </div>
                <div className="mainpage-recruit-group">
                    <h1 className="mainpage-recruit-group-title">18기</h1>
                    <div className="mainpage-recruit-group-contents">
                        <span className="mainpage-recruit-group-contents-to">-명</span>
                        <span className="mainpage-recruit-group-contents-link" data-deactivated>지원하기&rarr;</span>
                    </div>
                </div>
                <div className="mainpage-recruit-group">
                    <h1 className="mainpage-recruit-group-title">19기</h1>
                    <div className="mainpage-recruit-group-contents">
                        <span className="mainpage-recruit-group-contents-to">8명</span>
                        <span className="mainpage-recruit-group-contents-link">지원하기&rarr;</span>
                    </div>
                </div>
            </div>
            <div className="mainpage-section mainpage-seminar-section" data-dark-theme>
                <h1 className="mainpage-section-title">
                    <span className="mainpage-section-title-text">
                        SEMINAR
                        <span className="mainpage-section-title-underline"></span>
                    </span>
                </h1>
                <div className="mainpage-section-container" data-section-first>
                    <img className="mainpage-section-image" src="https://placehold.co/500x200/png" alt="" />
                </div>
                <div className="mainpage-section-body" data-section-last>
                    <h1 className="mainpage-section-body-title">Empowering Knowledge on AI & Data Science</h1>
                    <p className="mainpage-section-body-paragraph">
                        머신러닝, 딥러닝에 관해 주도적으로 공부하고 선생님과 동료 부원 앞에서 발표를 합니다. 질의응답 및 토론을 통해 함께 성장하고,
                        프로젝트를 수행할 역량을 확보합니다.
                    </p>
                </div>
            </div>
            <div className="mainpage-section mainpage-activities-section">
                <h1 className="mainpage-section-title">
                    <span className="mainpage-section-title-text">
                        ACTIVITIES
                        <span className="mainpage-section-title-underline"></span>
                    </span>
                </h1>
                <div className="mainpage-section-body" data-section-first>
                    <h1 className="mainpage-section-body-title">Participating in School Events</h1>
                    <p className="mainpage-section-body-paragraph">
                        수학체험전, 여민락 등 교내에서 진행하는 다양한 축제에 참여할 수 있습니다. 부스를 준비하면서 선배들과의 네트워크를 형성하고,
                        '함께 하는 프로젝트'를 진행합니다.
                    </p>
                </div>
                <div className="mainpage-section-container" data-section-last>
                    <img className="mainpage-section-image" src="https://placehold.co/500x200/png" alt="" />
                </div>
            </div>
            <div className="mainpage-section mainpage-projects-section" data-dark-theme>
                <h1 className="mainpage-section-title">
                    <span className="mainpage-section-title-text">
                        PROJECTS
                        <span className="mainpage-section-title-underline"></span>
                    </span>
                </h1>
                <div className="mainpage-section-container" data-section-first>
                    <img className="mainpage-section-image" src="https://placehold.co/500x200/png" alt="" />
                </div>
                <div className="mainpage-section-body" data-section-last>
                    <h1 className="mainpage-section-body-title">Build Projects and Realize Your Ideas</h1>
                    <p className="mainpage-section-body-paragraph">
                        1년 혹은 1학기 동안 공부한 내용을 바탕으로 미니 프로젝트를 진행합니다. 기획 및 개발 능력을 검증해보는 시간으로, 미래의
                        개발자와 창업가의 역량을 기를 수 있습니다.
                    </p>
                </div>
            </div>
            <div className="mainpage-downscroll-help">
                <img src={downscroll} alt="" />
            </div>
            <Footer />
        </div>
    )
}

export default MainPage