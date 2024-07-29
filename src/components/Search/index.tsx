import { component$ } from "@builder.io/qwik";

export default component$(()=>{
    return (
        <form action="">
            <input type="text" placeholder="Search your favorite meal by name..."/>
            <button type="submit">Search</button>
        </form>
    )
})