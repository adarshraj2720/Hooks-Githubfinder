// import Userprofile from "./userprofile"

import { useState, useEffect } from "react"


function App() {
    // event.preventDefault()

    let [name, setname] = useState('')
    let [name1, setname1] = useState('')
    let [name2, setname2] = useState('')
    // console.log(name)
    // console.log(name1)
    // console.log(name2)


    function handlechange(event) {
        let info = event.target.value
        setname(name=info)
    }

    // const handlechange = ({ target }) => updateusername(target.value);

    function handlesubmit(event) {
        event.preventDefault()
        let username = event.target[0].value
        // console.log(username)
        setname1(name1 = username)
    
        // setname(name="")
    }

    useEffect(() => {
        fetch(`https://api.github.com/users/${name1}`).then((res) => res.json()).then((data) => setname2(name2 = data))
    }, [name1])

    return (
        <>
            <h1>Github Finder</h1>
            <form onSubmit={handlesubmit}>
                <input onChange={handlechange}  type="text" placeholder="Enter The Username" id="username" name="username"></input>
                <button type="submit">Find</button>
            </form>
            <img src={name2.avatar_url}></img>
            <small>{name2.name}</small>
        </>
    )
}
export default App