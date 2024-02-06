import useFetch from "."


export default function UseFetchHook(){
  const {data,error,loading} = useFetch('https://dummyjson.com/products',{})


   console.log(error,data,loading)
    return(
        <div>
            <h1> use Fecth Hook</h1>
            {loading ? <h3> its loading</h3> : null}
            {error ? <h3> {error} </h3>: null}
            {data && data.products && data.products.length ? 
            data.products.map((item)=><div key={item.key}>
                {item.title}
            </div>):null}
        </div>
    );

     
}