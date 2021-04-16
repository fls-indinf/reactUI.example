import React from 'react';
import { CustomDisplayWrapper, WorkScreen } from "reactui/dist/moduleIndex";


import './CustomGreenButtonScreen.scss';

const CustomGreenButtonScreen = () => {
    return <CustomDisplayWrapper>
        {screen => <div className="green-button-screen">
            {screen}
        </div>}
    </CustomDisplayWrapper>
};

export default CustomGreenButtonScreen;