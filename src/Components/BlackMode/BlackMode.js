import './style.css'
export const BlackMode = ({setIsDark, isDark}) =>{

    return(<div className='changed'>
        <h2>Notes</h2>
        <button onClick={() => setIsDark(!isDark)}>Toggle mode</button>
    </div>)
}