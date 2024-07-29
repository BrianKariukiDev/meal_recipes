import { component$ } from "@builder.io/qwik";

export default component$(()=>{
    return (
        <div class="main">
            <div class="search">
                <form>
                <   input type="search" id="search" placeholder="Search meal by name..."/>    
                </form>
                
            </div>
        </div>
    )
})