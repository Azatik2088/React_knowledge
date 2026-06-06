import React from "react";
import HeaderItem from "./components/HeaderItem";
import ContentItem from "./components/ContentItem";
import FootertItem from "./components/FooterItem";

const HomePage = () => {
    return (
        <div className="container col-10">
            <HeaderItem />
            <ContentItem />
            <FootertItem />
        </div>
    );
}

export default HomePage;