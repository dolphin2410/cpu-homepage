import orgtable_17 from "assets/orgtable_17.png"
import orgtable_18 from "assets/orgtable_18.png"
import Footer from "components/ui/footer/Footer"
import "styles/pages/People.css"

function People() {
    return (
        <div className="ui-container people">
            <div className="people-container">
                <h1 className="people-title">
                    <span className="people-title-text">
                        조직도
                        <span className="people-title-underline"></span>
                    </span>
                </h1>
                <div className="people-orgtable-container">
                    <img className="people-orgtable-image" src={orgtable_17} alt="" />
                </div>
                <div className="people-orgtable-container">
                    <img className="people-orgtable-image" src={orgtable_18} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default People