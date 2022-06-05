/*Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

import React from 'react'
import ReactDOM from 'react-dom'


/* const project_page = (
    <div>
        <img src='./react-logo.png' width='40px' />
        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>) */


/* A function like this that returns React elements is considered a React component
imp things to follow 1. use Pascal Case
wrap the function name in angular brackets as html tag as <ProjectPage/> */
function ProjectPage() {

    return (<div>
        <img src='./react-logo.png' width='40px' />
        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>)

}

ReactDOM.render(<ProjectPage />, document.getElementById("root"))