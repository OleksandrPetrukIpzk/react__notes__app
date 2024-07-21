import './style.css'

export const Search = ({setNoteList,}) => {
    const handleSearch = (value) => {
        if (value.length === 0) {
            setNoteList(JSON.parse(localStorage.getItem('note')));

        } else {
            const length = value.length;
            const a = JSON.parse(localStorage.getItem('note')).filter(item => value.toLowerCase() === item.title.slice(0, length).toLowerCase());
            setNoteList(a);
        }
    }

    return (<div className='search'>
        <input onChange={(e) => handleSearch(e.target.value)} placeholder='Write what you want search'/>
    </div>)
}