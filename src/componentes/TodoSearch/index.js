

function TodoSearch({Input, searchValue,setSearchValue}) {
 
    return (
    <Input placeholder='Buscar...' value={searchValue} onChange ={(e) =>{setSearchValue(e.target.value)}}/>
    );
  }

  export {TodoSearch}; 