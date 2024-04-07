import Link from 'next/link'


const CreatorPage = () => {
  return (
    <div>
        <div>
            <h1>Creators</h1>
            <h2>Build your own RPG item data objects</h2>
            <p>Create a data object, generate a CID, use your data object anywhere to build your own games</p>
            <h2>How to use the creators</h2>
            <h3>Click the button for the game data object you wish to create, then:</h3>

            <p>1) Fill out the fields of the creator form</p>
            <p>2) Once you are happy with your creation, click 'Save'</p>
            <p>3) Highlight and copy the data object when the modal pops up</p>
            <p>4) Click 'Save Data' & sign wallet transaction to save your data object on-chain</p>
            <p>5) Click the CID/Hyperfile button to go to Hyperfiles.org</p>
            <p>6) Follow instructions <Link href="https://www.hyperfiles.org/">HERE</Link> if you need help generating your CID or Hyperfile</p>
        </div>
        <div className='button-group'>
            <Link href="/creators/player">
                <button>Player Creator</button>
            </Link>
            <Link href='/creators/monster'>
                <button>Monster Creator</button>
            </Link>
            <Link href='/creators/weapon'>
                <button>Weapon Creator</button>
            </Link>
            <Link href="https://www.hyperfiles.org/">
                <button>Generate CID/Hyperfile</button>
            </Link>
        </div>
    </div>
    
  )
}

export default CreatorPage