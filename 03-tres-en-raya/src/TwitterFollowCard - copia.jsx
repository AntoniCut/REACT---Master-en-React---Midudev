//  **************************************************
//  **********  /src/TwitterFollowCard.jsx  **********
//  **************************************************

import { useState } from "react"

export function TwitterFollowCard({ children, userName, isFollowing}) {

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const [isFollowing, setIsFollowing] = useState(false);

    /*  
    //  lo mismo que la linea de arriba.
    const state          = useState(false)
    const isFollowing    = state[0]
    const setIsFollowing = state[1]
    */

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    const imageSrc = `https://unavatar.io/${userName}`

    return (
    
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' 
                     src= {imageSrc} 
                     alt="El avatar de midudev" />
                <div className='tw-followCard-info'>
                    <strong> {children} </strong>
                    <span className='tw-followCard-infoUserName'> @{userName} </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}> {text} </button>
            </aside>
        </article>
              
    )
}
