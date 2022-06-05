//alt + shift + a - > multiline comment

/* 
JSX -> all the elements are inside the `page` object with 2 children inside h1 and ul under props
I can add a whole bunch of JSX into a variable and use that variable kind of like any other variable
what we get back we create JSX is a JavaScript object.
*/
/* const page = (
    <div>
        <h1 className='header'>Jai Ganesha Satya Sai 🙏 </h1>
        <ul>
            <li>Ganesha</li>
            <li>Satya</li>
            <li>Sai</li>
        </ul>
    </div>);
console.log(page);

ReactDOM.render(page, document.getElementById('root'));
 */
/* const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

console.log(page)

ReactDOM.render(
    page,
    document.getElementById("root")
) */

//we have to wrap the elements in a parent element
/* ReactDOM.render(<div><h1>Jai Ganesha Satya Sai 🙏 </h1>
    <ul>
        <li>Ganesha</li>
        <li>Satya</li>
        <li>Sai</li>
    </ul>
</div>, document.getElementById('another'));
 */
/* ReactDOM.render(
    <ul>
        <li>Ganesha</li>
        <li>Satya</li>
        <li>Sai</li>
    </ul>, document.querySelector('.types')); */
/*
function MainContent() {

    return (
        <h1>I'm learning React!</h1>
    )
} */

//we are relying on React to figure out how to turn on what we have written declaratively into the JS code that is needed to append it to the DOM
/* ReactDOM.render(<div>
    <MainContent />
</div>, document.getElementById('root')) */

/*
const root = document.getElementById('root');
const h1 = document.createElement('h1');
h1.textContent = "This is an imperative way to program";
h1.className = 'header'; */

// root.append(h1);

/* Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
 */

/* const navbar =
    <nav>
        <h1>React for Vishali</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>

ReactDOM.render(navbar, document.getElementById("root"))
 */


/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */
/* what we get when we create JSX is a JavaScript object. JSX returns plain JavaScript objects
In order to render  on the browser we need convert it to a string by using JSON.stringify() and pass the object  */
/* const sample_page = (
    <div>
        <h1>This is a sample page JSX using React</h1>
        <p> React is declarative</p>
        <p> React is composable</p>
    </div>
)
console.log(sample_page);
const root = document.getElementById("root").append(JSON.stringify(sample_page))
root.append(sample_page) */
import React from "react"
import ReactDOM from "react-dom"

/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

const page = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

//document.getElementById("root").append(JSON.stringify(page));
ReactDOM.render(page, document.getElementById("root"))
