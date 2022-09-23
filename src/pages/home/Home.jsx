export const Home = ({ setLogged }) => {
    const toogleLogged = () => {
        setLogged((value) => !value)
    }
    return (
        <>
            <h1>Home</h1>
            <button 
                style={{
                    padding:"10px", backgroundColor:"#111", color: "#fff"
                }} 
                onClick={toogleLogged}>
                Ir para Dashboard
            </button>
        </>
    )
}