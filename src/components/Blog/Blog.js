import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-container">
            <div className="container">
                <div className="blog-item">
                    <h3>What is context API?</h3>
                    <p>
                        Content API provides the way to pass data through the
                        component without props drilling. We can easily pass any
                        data with the Context API structure. Simply we can say
                        we can send data with Content API and we can receive the
                        data from any component. It gives us more power to work
                        on any projects. We can pass any data with props. It can
                        only send the data from parent to child. But with
                        Context API we can share data through any components.
                    </p>
                </div>

                <div className="blog-item">
                    <h3>What is semantic tag?</h3>
                    <p>
                        Semantic tags are human-readable also the browser
                        understands the tags. A semantic tag clearly describes
                        its meaning so that both humans and machines understand
                        it. HTML was a markup language that only describe a
                        document. As the internet grows it needs some changes.
                        Semantic tags contain HTML tags that describe their
                        meaning to both the browser and the developer. It makes
                        HTML more powerful and more efficient. There are some
                        example of semantic tags: <code>&lt;article&gt;</code>,{' '}
                        <code>&lt;footer&gt;</code>, <code>&lt;header&gt;</code>
                        , <code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>,{' '}
                        <code>&lt;section&gt;</code>
                    </p>
                </div>

                <div className="blog-item">
                    <h3>
                        Difference between inline, block and inline-block
                        elements?
                    </h3>
                    <p>
                        <b>Inline Element: </b> An inline element only takes the
                        necessary space for the element. It doesn't start with a
                        new line. Here is some example of inline elements:{' '}
                        <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>,{' '}
                        <code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>,{' '}
                        <code>&lt;small&gt;</code>, <code>&lt;strong&gt;</code>,{' '}
                        <code>&lt;textarea&gt;</code>
                    </p>
                    <p>
                        <b>Block Element: </b> Block Elements take up all the
                        available space of the line. It adds a margin before the
                        element's content. It always starts with a new line.
                        Here is some example of inline elements:{' '}
                        <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>,{' '}
                        <code>&lt;h1&gt;-&lt;h6&gt;</code>,{' '}
                        <code>&lt;form&gt;</code>, <code>&lt;table&gt;</code>,{' '}
                        <code>&lt;section&gt;</code>
                    </p>
                    <p>
                        <b>Inline-block: </b> Normally we can't an inline
                        element takes the necessary space for the element. When
                        we set <code>display: inline-block;</code> The inline
                        element behave line an block element. We can set width
                        and height of the element.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
