import React from "react";
function NavBar(){
    let Links=[
        {name:"Home",link:"/"},
        {name:"About",link:"/"},
        {name:"Us",link:"/"},
        {name:"Project",link:"/"},
        {name:"Contact",link:"/"},
    ]
    return(
       
                {/* <ul className="md:flex md:items-center">
                    {
                        Links.map(
                           (Link)=>(
                            <li key={Link.name} className="md:ml-8 text-xl">
                                <a href={Link.link} className="text-white hover:text-cyan-400 ">{Link.name} </a>
                            </li>
                           )
                        )
                    }
                </ul>     */}
     
    )
}
export default NavBar;