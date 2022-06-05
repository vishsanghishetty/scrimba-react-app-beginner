Quiz!

1. What is a React component?
   React component is a reusable Javascript function which can be used to build greater components.It returns a bunch of React elements. This
   React elements are the objects that get created when we return JSX

2. What's wrong with this code?

```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

It is not wrapped inside a parent element like <div> </div> or a fragment element like <> </>

3.  What's wrong with this code?

```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

Header function is not wrapped inside angle brackets inside the ReactDOM.render() like <Header/>

4. React is taking the JSX inside the function and turning them into real DOM elements. That's why we need className attribute similar to Vanilla JS where we create an element and add ClassName to it
