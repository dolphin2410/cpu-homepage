import orgtable_17 from "assets/orgtable_17.png"
import Footer from "components/ui/footer/Footer"
import "styles/pages/People.css"

function People() {
    return (
        <div className="ui-container people">
            <h1 className="people-title">
                <span className="people-title-text">
                    조직도
                    <span className="people-title-underline"></span>
                </span>
            </h1>
            <div className="people-orgtable-container">
                <h2 className="people-orgtable-title">17기</h2>
                <img className="people-orgtable-image" src={orgtable_17} alt="" />
            </div>
            <Footer />
        </div>
    )
}

export default People