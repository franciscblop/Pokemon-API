import {useState} from "react"
import './App.css';
import Axios from "axios";



function App() {
  const [pokemon,setpokemon] = useState("");
  const [pokemonEleccion,setpokemonEleccion] = useState (false)
  const [pokeinfo, setpokeinfo] = useState({
    name : "", 
    species : "", 
    img:"", 
    hp:"",
    attack: "",
    defense:"",
    type: ""});

  const buscarpokemon = ( )=> {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then ((response)=> {
      setpokeinfo({name : pokemon, 
        species : response.data.name, 
        img:response.data.sprites.front_default, 
        hp:response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense:response.data.stats[2].base_stat,
        type: response.data.types[0].type.name, })
        
    });
    setpokemonEleccion(true)
  };
  return (
    <div className="App">
      <div className="secciontitulo">
      <h1>pokemon api</h1>
      <input tipy="text" onChange = {(event) =>{setpokemon (event.target.value)
       }}
      />
      <button onClick={buscarpokemon}>Busca tu Pokemon</button>
      </div>
      <div className="displeyseccion">{!pokemonEleccion ? 
      (<h1>porfabor elija su pokemon</h1>):(
        <>
      <h1>{pokeinfo.name}</h1>
      <img src={pokeinfo.img}/>
      <h3>species :{pokeinfo.species}</h3>
      <h3>type: {pokeinfo.type}</h3>
      <h4>hp: {pokeinfo.hp}</h4>
      <h4>attack: {pokeinfo.attack}</h4>
      <h4>defense: {pokeinfo.defense}</h4>


        </>
      )}
      </div>
    </div>
  );
}

export default App;
