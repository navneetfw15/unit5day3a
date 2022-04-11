import "./counter.css";

function Counter({prop,set}){

    function IncDec(value){
        set(prop+value);
    }

    return <div>
        <h1 className="mid">Likes:<spam>{prop}</spam></h1>
        <button onClick={()=>IncDec(1)}>Increment</button>
        <button onClick={()=>IncDec(-1)}>Decrement</button>
    </div>
}

export {Counter};
