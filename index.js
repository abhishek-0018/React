const heading = React.createElement("h1", { id: "heading" }, "Hello"); // first block tells the tag to be created, second tells if there will be any attribute to that tag like id or class and third will tell what to show.
// heading doesn't have h1 tag in it. It is a react element. It has props(attributes+child) "h1", id:"heading" are attributes while "Hello" is children
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // this render tag converts react element to h1 tag and will replace this tag with tags in html file inside root id not append it

// Nesting divs

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" }, [
        React.createElement(
            "h1",
            {},
            "I am a h1 tag"),
        React.createElement(
            "h2",
            {},
            "I am a h2 tag")
    ]
    )
);

const root1 = ReactDOM.createRoot(document.getElementById("root2"));
root1.render(parent);