import './style.css'

export const Note = ({item, setNoteList, noteList}) =>{
    const deleteElement = () =>{
        const list = noteList;
        const filteredList = list.filter(items => items !== item);
        setNoteList(filteredList);
        localStorage.setItem('note', JSON.stringify(filteredList));
    }

    return(<div className='note'>
        <p>{item.title}</p>
        <div>
            <p>{item.date}</p>
            <button onClick={deleteElement}>🗑</button>
        </div>
    </div>)
}