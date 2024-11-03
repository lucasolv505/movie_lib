import { useState } from "react"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import './Navbar.css'

function Navbar(){
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch = ''
    }

    return(
        <div id="navbar">
            <h2>
                <Link to='/'>MOVIE LIB <BiCameraMovie/></Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="SEARCH MOVIE" onChange={(e)=> setSearch(e.target.value)} value={search} />
                <button type="submit"><BiSearchAlt2/></button>
            </form>
        </div>
    )
}

export default Navbar