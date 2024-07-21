import {useState} from "react";
import {format} from "date-fns";
import './style.css'

export const CreateNewNote = ({noteList, setNoteList}) => {
    const [changed, setChanged] = useState('');
    const handleChange = (value) => {
        if (value.length !== 201) {
            setChanged(value);
        }
    }
    const addNoteElement = () => {
        if (changed) {
            const note = {
                title: changed,
                date: format(new Date(), 'dd/MM/yyyy')
            }
            setNoteList(prev => [...prev, note]);
            localStorage.setItem('note', JSON.stringify([...noteList, note]));
            setChanged('');
        }
    }
    const refreshSearch = () => {
        setChanged('');
    }

    return (<div className='add'>
        <input value={changed} onChange={(e) => handleChange(e.target.value)} placeholder='Write your message...'/>
        <p>{200 - changed.length} You can write symbol</p>
        <div>
            <button onClick={refreshSearch}>♻</button>
            <button onClick={addNoteElement}>Save</button>
        </div>
    </div>)
}