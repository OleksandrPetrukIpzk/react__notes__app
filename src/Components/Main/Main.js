import {useEffect, useState} from "react";
import {CreateNewNote} from "Components/CreateNewNote/CreateNewNote";
import {Note} from "Components/Note/Note";
import {Search} from "Components/Search/Search";
import {BlackMode} from "Components/BlackMode/BlackMode";
import './style.css'

export const Main = () => {
    const [noteList, setNoteList] = useState(JSON.parse(localStorage.getItem('note')) || []);
    const [isChange, setIsChange] = useState(false);
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
            <div className='list'>
                {noteList?.map(item => <Note item={item} setNoteList={setNoteList} noteList={noteList}/>)}
                <CreateNewNote noteList={noteList} setNoteList={setNoteList} isChange={isChange}
                               setIsChange={setIsChange}/>
            </div>
        </div>
    )
}