import Welcome from "./Welcome";

let nama = "Afidatul";
function App(){
    if (nama == ""){
        return <button>login</button>
    }else{
        return <Welcome nama={nama}/>
    }
}

export default App