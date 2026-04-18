import FeedSection from "@/components/FeedSection/FeedSection";
import Header from "@/components/Header/Header";

function FeedPage(){
    return (
        <div className="allScreen">
            <Header
                isUserLogado={false}
            ></Header>
            <main>
                <FeedSection
                    userHaveProfile={true}
                ></FeedSection>
            </main>
        </div>
    )
}

export default FeedPage;