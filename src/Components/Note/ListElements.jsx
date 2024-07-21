import {Note} from "./Note";
import {CreateNewNote} from "../CreateNewNote/CreateNewNote";

export const ListElements = ({noteList, setNoteList}) => {

    return <div className='list'>
    {noteList?.map(item => <Note item={item} setNoteList={setNoteList} noteList={noteList}/>)}
    <CreateNewNote noteList={noteList} setNoteList={setNoteList}/>
</div>
}