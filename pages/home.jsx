import Header from "../component/header"
import ImageList from "../component/imagelist"
import Footer from "../component/footer"

function Home() {
    return (
        <div className="container main-layout">
            <Header className="layout-header" />
            <ImageList className="layout-content" />
            <Footer className="layout-footer" />
        </div>
    );
}

export default Home;