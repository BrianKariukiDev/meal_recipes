import { component$, useStylesScoped$ } from "@builder.io/qwik";
import HeaderStyle from './header.css?inline';

export default component$(()=>{
    useStylesScoped$(HeaderStyle);
    return (
        <div class="top">
            <div class="logo">INCOGNITO meals</div>
            <ul>
                <li>Home</li>
                <li>Categories</li>
                <li>Areas</li>
                <li>About</li>
            </ul>
        </div>
)})