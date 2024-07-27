import { useNavigate } from "react-router-dom";

function Home(){
    const router = useNavigate();

    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={()=>router('/useNavigate')}>Redirect to routing page</button>
        </div>
    )
    
}
export default Home;