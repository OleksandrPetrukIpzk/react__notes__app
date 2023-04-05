import {useState} from "react";
import {format} from "date-fns";
import './style.css'

export const CreateNewNote = ({noteList, setNoteList, setIsChange, isChange}) => {
    const [changed, setChanged] = useState('');
    const [count, setCount] = useState(0);
    const handleChange = (value) => {
        if (value.length !== 201) {
            setChanged(value);
            setCount(value.length);
        }

    }
    const addNoteElement = () => {
        if (changed) {
            const note = {
                title: changed,
                date: format(new Date(), 'dd/MM/yyyy')
            }
            const nowNote = noteList;
            nowNote.push(note);
            setNoteList(nowNote);
            localStorage.setItem('note', JSON.stringify(nowNote));
            setIsChange(!isChange)
        }

    }
    const refreshSearch = () => {
        setChanged('');
        setCount(0)
    }
    return (<div className='add'>
        <input value={changed} onChange={(e) => handleChange(e.target.value)} placeholder='Write your message...'/>
        <p>{200 - count} You can write symbol</p>
        <div>
            <button onClick={refreshSearch}>♻</button>
            <button onClick={addNoteElement}>Save</button>
        </div>
    </div>)
}