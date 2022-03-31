import React from 'react';

const Answer1 = () => {
    return (
        <div>
            <h3>How react work:</h3>
            <p>React is a library. For building user interfaces which generally thought of as the view layer in an application. You might have used library like Handlebars, or jQuery in the past. Just as jQuery manipulates UI elements, or Handlebars templates are inserted onto the page,react component change what the user sees.React is divided into two major APIs. First, there’s the React DOM. This is the API that’s used to perform the actual rendering on a web page. Second, there’s the React component API. These are the parts of the page that are actually rendered by React DOM.React components don’t require executing steps in an imperative way to render content. This is why JSX is so central to React components. The XML-style syntax makes it easy to describe what the UI should look like. That is, what are the HTML elements that this component is going to render? This is called declarative programming, and is very well-suited for UI development.</p>


            <h3>Differnet between props and state:</h3>

            <p>
                props can  Data is passed from one component to another.
                State Data is passed within the component only.

                props is Immutable (cannot be modified) beside state is Mutable ( can be modified).
                Props can be used with state and functional components but 	State can be used only with the state components/class component (Before 16.0).
                Props are read-only besideState is both read and write.The state is a local data storage that is local to the component only and cannot be passed to other components.
            </p>
        </div>
    );
};

export default Answer1;