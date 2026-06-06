import React from "react";

const currentYear = new Date().getFullYear();

const FootertItem = () => {
    return (
        <div>
            <p className='m-3'>© Авторские права мои {currentYear}</p>
        </div>
    );
}

export default FootertItem;