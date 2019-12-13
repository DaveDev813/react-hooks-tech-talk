import React, { useContext } from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};

const ThemeContext = React.createContext(themes.light);

function UseContextSample() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />

      <div>
        <p>
          <meta charSet='utf-8' />
        </p>
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
          Accepts a context object (the value returned from&nbsp;
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
            React.createContext
          </code>
          ) and returns the current context value for that context. The current
          context value is determined by the&nbsp;
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
            value
          </code>{' '}
          prop of the nearest&nbsp;
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
            &lt;MyContext.Provider&gt;
          </code>{' '}
          above the calling component in the tree.
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
          When the nearest&nbsp;
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
            &lt;MyContext.Provider&gt;
          </code>{' '}
          above the component updates, this Hook will trigger a rerender with
          the latest context&nbsp;
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
            value
          </code>{' '}
          passed to that&nbsp;
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
            MyContext
          </code>{' '}
          provider.
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
          Don’t forget that the argument to&nbsp;
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
            useContext
          </code>{' '}
          must be the&nbsp;
          <em style={{ margin: '0px', padding: '0px', boxSizing: 'inherit' }}>
            context object itself
          </em>
          :
        </p>
        <ul
          style={{
            margin: '20px 0px 0px',
            padding: '0px 0px 0px 20px',
            boxSizing: 'inherit',
            listStyle: 'disc',
            fontSize: 'medium',
            color: 'rgb(26, 26, 26)',
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
          <li
            style={{
              margin: '10px 0px 0px',
              padding: '0px',
              boxSizing: 'inherit'
            }}
          >
            <strong
              style={{
                margin: '0px',
                padding: '0px',
                boxSizing: 'inherit',
                fontWeight: 'bolder'
              }}
            >
              Correct:
            </strong>
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
              useContext(MyContext)
            </code>
          </li>
          <li
            style={{
              margin: '10px 0px 0px',
              padding: '0px',
              boxSizing: 'inherit'
            }}
          >
            <strong
              style={{
                margin: '0px',
                padding: '0px',
                boxSizing: 'inherit',
                fontWeight: 'bolder'
              }}
            >
              Incorrect:
            </strong>
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
              useContext(MyContext.Consumer)
            </code>
          </li>
          <li
            style={{
              margin: '10px 0px 0px',
              padding: '0px',
              boxSizing: 'inherit'
            }}
          >
            <strong
              style={{
                margin: '0px',
                padding: '0px',
                boxSizing: 'inherit',
                fontWeight: 'bolder'
              }}
            >
              Incorrect:
            </strong>
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
              useContext(MyContext.Provider)
            </code>
          </li>
        </ul>
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
          A component calling&nbsp;
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
            useContext
          </code>{' '}
          will always re-render when the context value changes. If re-rendering
          the component is expensive, you can&nbsp;
          <a
            href='https://github.com/facebook/react/issues/15156#issuecomment-474590693'
            rel='nofollow noopener noreferrer'
            style={{
              margin: '0px',
              padding: '0px',
              boxSizing: 'inherit',
              backgroundColor: 'rgba(187, 239, 253, 0.3)',
              color: 'rgb(26, 26, 26)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
            }}
            target='_blank'
          >
            optimize it by using memoization
          </a>
          .
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
    </ThemeContext.Provider>
  );
}

function Toolbar(props: any) {
  return (
    <div>
      <ThemedButtonOG />
    </div>
  );
}
// hooks
function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

// old school
function ThemedButtonOG() {
  return (
    <ThemeContext.Consumer>
      {theme => {
        return (
          <button
            style={{ background: theme.background, color: theme.foreground }}
          >
            I am styled by theme context!
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default UseContextSample;
