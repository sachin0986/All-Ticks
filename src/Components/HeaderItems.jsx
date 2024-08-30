import React from "react";

const style = {
    headeBlock: `m-4 grid justify-items-center `,
    logoTags: ``
}

const HeaderItems = (props) =>{
   const { hedData } = props;
    return(
        <div className={style.headeBlock}>
            <>{hedData?.logo}</>
            <h3>{hedData?.name}</h3>
        </div>
    );
};

export default HeaderItems;