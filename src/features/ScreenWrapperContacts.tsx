import React, {FC} from "react";
import { ScreenWrapper, useAPI } from "@sibvisions/reactui";
import CustomCounter from "./CustomCounter";

const ScreenWrapperContacts:FC<any> = (props) => {
    const api = useAPI();

    const onOpen = () => {
        api.addCustomComponent("Con-CG_E_contacts_IMAGE", <CustomCounter />)
    }

    return (
        <ScreenWrapper onOpen={onOpen}>
            {workScreen =>
                <>
                    {workScreen}
                </>
            }
        </ScreenWrapper>
    )
}
export default ScreenWrapperContacts