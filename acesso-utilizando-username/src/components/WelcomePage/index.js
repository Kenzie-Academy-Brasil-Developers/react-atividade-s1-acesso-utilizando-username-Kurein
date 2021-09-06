

function WelcomePage({user, setIsLoggedIn}){

    function HandleLogout(){
        setIsLoggedIn(false)
    }

    return(
        <>
        <h1>Bem vindo {user}!</h1>
        <button onClick={() => HandleLogout()}>Logout</button>
        </>
        
    )
}

export default WelcomePage