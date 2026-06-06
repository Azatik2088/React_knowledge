import React from "react";
import HeaderItem from "./components/HeaderItem";
import ContentItem from "./components/ContentItem";
import FootertItem from "./components/FooterItem";

const HomePage = () => {
    const value = "Какие-то карточки с картинками";
    const labels = [
        { id: 1, cardTitle: "Заголовок 1", cardText: "Описание  1" },
        { id: 2, cardTitle: "Заголовок 2", cardText: "Описание  2" },
        { id: 3, cardTitle: "Заголовок 3", cardText: "Описание  3" },
    ];
    return (
        <div className="container col-10">
            <HeaderItem headerText={value} />
            <ContentItem
                setOfLabels={labels}
            />
            <FootertItem />
        </div>
    );
}

export default HomePage;