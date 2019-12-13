import React, { useState, useEffect } from 'react';

function UseEffectSample() {
  const [count, setCount] = useState();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <div>
        <p>
          <meta charSet='utf-8' />
        </p>
        <p>
          <meta charSet='utf-8' />
        </p>
        <p
          style={{
            margin: '30px 0px 0px',
            padding: '0px',
            boxSizing: 'inherit',
            fontSize: '17px',
            lineHeight: '1.7',
            maxWidth: '42em',
            color: 'rgb(0, 0, 0)',
            fontFamily:
              '-apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
            fontStyle: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontWeight: 400,
            letterSpacing: 'normal',
            orphans: 2,
            textAlign: 'start',
            textIndent: '0px',
            textTransform: 'none',
            whiteSpace: 'normal',
            widows: 2,
            wordSpacing: '0px',
            WebkitTextStrokeWidth: '0px',
            textDecorationStyle: 'initial',
            textDecorationColor: 'initial'
          }}
        >
          You’ve likely performed data fetching, subscriptions, or manually
          changing the DOM from React components before. We call these
          operations “side effects” (or “effects” for short) because they can
          affect other components and can’t be done during rendering.
        </p>
        <p
          style={{
            margin: '30px 0px 0px',
            padding: '0px',
            boxSizing: 'inherit',
            fontSize: '17px',
            lineHeight: '1.7',
            maxWidth: '42em',
            color: 'rgb(0, 0, 0)',
            fontFamily:
              '-apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
            fontStyle: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontWeight: 400,
            letterSpacing: 'normal',
            orphans: 2,
            textAlign: 'start',
            textIndent: '0px',
            textTransform: 'none',
            whiteSpace: 'normal',
            widows: 2,
            wordSpacing: '0px',
            WebkitTextStrokeWidth: '0px',
            textDecorationStyle: 'initial',
            textDecorationColor: 'initial'
          }}
        >
          The Effect Hook,&nbsp;
          <code
            className='gatsby-code-text'
            style={{
              margin: '0px',
              padding: '0px 3px',
              boxSizing: 'inherit',
              fontFamily:
                'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
              fontSize: '0.94em',
              background: 'rgba(255, 229, 100, 0.2)',
              color: 'rgb(26, 26, 26)',
              wordBreak: 'break-word'
            }}
          >
            useEffect
          </code>
          , adds the ability to perform side effects from a function component.
          It serves the same purpose as&nbsp;
          <code
            className='gatsby-code-text'
            style={{
              margin: '0px',
              padding: '0px 3px',
              boxSizing: 'inherit',
              fontFamily:
                'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
              fontSize: '0.94em',
              background: 'rgba(255, 229, 100, 0.2)',
              color: 'rgb(26, 26, 26)',
              wordBreak: 'break-word'
            }}
          >
            componentDidMount
          </code>
          ,&nbsp;
          <code
            className='gatsby-code-text'
            style={{
              margin: '0px',
              padding: '0px 3px',
              boxSizing: 'inherit',
              fontFamily:
                'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
              fontSize: '0.94em',
              background: 'rgba(255, 229, 100, 0.2)',
              color: 'rgb(26, 26, 26)',
              wordBreak: 'break-word'
            }}
          >
            componentDidUpdate
          </code>
          , and&nbsp;
          <code
            className='gatsby-code-text'
            style={{
              margin: '0px',
              padding: '0px 3px',
              boxSizing: 'inherit',
              fontFamily:
                'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
              fontSize: '0.94em',
              background: 'rgba(255, 229, 100, 0.2)',
              color: 'rgb(26, 26, 26)',
              wordBreak: 'break-word'
            }}
          >
            componentWillUnmount
          </code>{' '}
          in React classes, but unified into a single API. (We’ll show examples
          comparing&nbsp;
          <code
            className='gatsby-code-text'
            style={{
              margin: '0px',
              padding: '0px 3px',
              boxSizing: 'inherit',
              fontFamily:
                'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
              fontSize: '0.94em',
              background: 'rgba(255, 229, 100, 0.2)',
              color: 'rgb(26, 26, 26)',
              wordBreak: 'break-word'
            }}
          >
            useEffect
          </code>{' '}
          to these methods in&nbsp;
          <a
            href='https://reactjs.org/docs/hooks-effect.html'
            style={{
              margin: '0px',
              padding: '0px',
              boxSizing: 'inherit',
              backgroundColor: 'rgba(187, 239, 253, 0.3)',
              color: 'rgb(26, 26, 26)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
            }}
          >
            Using the Effect Hook
          </a>
          .)
        </p>
        <h4
          style={{
            margin: '0px',
            padding: '0px',
            boxSizing: 'inherit',
            fontSize: '20px',
            color: 'rgb(109, 109, 109)',
            lineHeight: '1.3',
            fontWeight: 400,
            fontFamily:
              '-apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
            fontStyle: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            letterSpacing: 'normal',
            orphans: 2,
            textAlign: 'start',
            textIndent: '0px',
            textTransform: 'none',
            whiteSpace: 'normal',
            widows: 2,
            wordSpacing: '0px',
            WebkitTextStrokeWidth: '0px',
            textDecorationStyle: 'initial',
            textDecorationColor: 'initial'
          }}
        >
          <a
            href='https://reactjs.org/docs/hooks-overview.html#declaring-multiple-state-variables'
            className='anchor'
            style={{
              margin: '0px 0px 0px -20px',
              padding: '0px 4px 0px 0px',
              boxSizing: 'inherit',
              backgroundColor: 'transparent',
              color: 'inherit',
              textDecoration: 'none',
              float: 'left'
            }}
          />
        </h4>
      </div>
    </div>
  );
}

export default UseEffectSample;
