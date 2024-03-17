import React, {FC, useState} from 'react';
import "./MenuItem.scss"
import MyInput from "@/components/general/MyInput/MyInput";
import MyBtn from "@/components/UI/MyBtn/MyBtn";

interface MenuItemProps {
    menu: any
}

const MenuItem: FC<MenuItemProps> = ({menu}) => {
    const [name, setName] = useState<string>("")
    const [url, setUrl] = useState<string>("")


    const deleteHandler = () => {

    }

    const submitHandler = () => {

    }
    return (
        <div className="container-menu-item">
            <MyInput type={"text"} placeholder={`${menu.translations[0].name}`}/>
            <MyInput type={"text"} placeholder={`${menu.translations[0].url}`}/>
            <MyBtn text={"submit"} color={"primary"} click={submitHandler}/>
            <MyBtn text={"delete"} color={"attention"} click={deleteHandler}/>
        </div>
    );
};

export default MenuItem;