import {useEffect, useState} from "react";
import {Search} from "Components/Search/Search";
import {BlackMode} from "Components/BlackMode/BlackMode";
import './style.css'
import {ListElements} from "../Note/ListElements";

export const Main = () => {
    const [noteList, setNoteList] = useState(JSON.parse(localStorage.getItem('note')) || []);
    const [isDark, setIsDark] = useState(false);
    const bodyElement = document.getElementsByTagName('body')[0];
    useEffect(() => {
        if (isDark) {
            bodyElement.className = 'dark';
        } else {
            bodyElement.className = 'light';
        }

    }, [isDark])
    return (
        <div>
            <BlackMode setIsDark={setIsDark} isDark={isDark}/>
            <Search setNoteList={setNoteList}/>
           <ListElements noteList={noteList} setNoteList={setNoteList}/>
        </div>
    )
}