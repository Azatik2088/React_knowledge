import React from "react";

const value = "Какие-то краточки с картинками";

const HeaderItem = () => {
    return (
        <div>
            <h1 className='h1-style m-3'>{value}</h1>
        </div>
    );
}

export default HeaderItem;