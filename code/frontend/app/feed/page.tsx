import FeedSection from "@/components/FeedSection/FeedSection";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";

function FeedPage(){
    return (
        <div className="allScreen">
            <Header />
            <Main orientation="topCenter">
                <FeedSection />
            </Main>
        </div>
    )
}

export default FeedPage;