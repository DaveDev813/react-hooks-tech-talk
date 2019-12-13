import React, { useState, ReactElement } from 'react';
import useCustomHooks from '../hooks/useCustomeHooks';


function UseStateSample(): ReactElement {
  // Declare a new state variable, which we'll call "count"
  const [name, setName] = useState<number>(0);

  const x = useCustomHooks();

  return (
    <div>


      <p>You clicked {name} times</p>
      <p>SAAMPLE {x ? 'true' : 'false'}</p>
      <button onClick={() => setName(name + 1)}>Click me</button>




      <div>
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
          Here,&nbsp;
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
            useState
          </code>{' '}
          is a&nbsp;
          <em style={{ margin: '0px', padding: '0px', boxSizing: 'inherit' }}>
            Hook
          </em>{' '}
          (we’ll talk about what this means in a moment). We call it inside a
          function component to add some local state to it. React will preserve
          this state between re-renders.&nbsp;
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
            useState
          </code>{' '}
          returns a pair: the&nbsp;
          <em style={{ margin: '0px', padding: '0px', boxSizing: 'inherit' }}>
            current
          </em>{' '}
          state value and a function that lets you update it. You can call this
          function from an event handler or somewhere else. It’s similar
          to&nbsp;
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
            this.setState
          </code>{' '}
          in a class, except it doesn’t merge the old and new state together.
          (We’ll show an example comparing&nbsp;
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
            useState
          </code>{' '}
          to&nbsp;
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
            this.state
          </code>{' '}
          in&nbsp;
          <a
            href='https://reactjs.org/docs/hooks-state.html'
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
            Using the State Hook
          </a>
          .)
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
          The only argument to&nbsp;
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
            useState
          </code>{' '}
          is the initial state. In the example above, it is&nbsp;
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
            0
          </code>{' '}
          because our counter starts from zero. Note that unlike&nbsp;
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
            this.state
          </code>
          , the state here doesn’t have to be an object — although it can be if
          you want. The initial state argument is only used during the first
          render.
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

export default UseStateSample;
