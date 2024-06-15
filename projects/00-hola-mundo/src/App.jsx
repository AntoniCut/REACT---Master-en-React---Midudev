//  *************************************
//  **********  /src/App.jsx  **********
//  *************************************

import './index.css'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    
    return(
        <section className="App">
            
            <TwitterFollowCard isFollowing={true}  userName="midudev" name="Miguel Ángel Durán" />
            <TwitterFollowCard isFollowing={false} userName="pheralb" name="Pablo Hernandez" />  
            <TwitterFollowCard isFollowing         userName="elomusik" name="Elon Musk" />
            <TwitterFollowCard isFollowing         userName="vxnder"   name="Vanderhark" />
        </section>
     )
   
}

