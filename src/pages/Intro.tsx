import React from 'react';
const Intro = () => (
  <div>
    <style
      type='text/css'
      dangerouslySetInnerHTML={{
        __html:
          "p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px 'Helvetica Neue'} p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px 'Helvetica Neue'; min-height: 16.0px} p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px 'Helvetica Neue'; min-height: 17.0px} p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'Helvetica Neue'} li.li1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px 'Helvetica Neue'} span.s1 {font: 10.0px Menlo} ul.ul1 {list-style-type: disc}"
      }}
    />
    <p className='p1'>
      <strong>Introducing Hooks</strong>
    </p>
    <p className='p2'>
      <br />
    </p>
    <ul className='ul1'>
      <li className='li1'>
        <strong>Completely opt-in</strong>
      </li>
      <li className='li1'>
        <strong>100% backwards-compatible</strong>
      </li>
      <li className='li1'>
        <strong>There are no plans to remove classes from React</strong>
      </li>
      <li className='li1'>
        <strong>Hooks don’t replace your knowledge of React concepts</strong>
      </li>
    </ul>
    <p className='p2'>
      <br />
    </p>
    <p className='p1'>
      <strong>Motivation</strong>
    </p>
    <p className='p2'>
      <br />
    </p>
    <ul className='ul1'>
      <li className='li1'>
        <strong>It’s hard to reuse stateful logic between components</strong>
      </li>
      <li className='li1'>
        <strong>Complex components become hard to understand</strong>
      </li>
    </ul>
    <p className='p3'>
      <br />
    </p>
    <p className='p1'>
      <strong>Rules of Hooks</strong>
    </p>
    <p className='p3'>
      <br />
    </p>
    <ul className='ul1'>
      <li className='li1'>
        Only call Hooks <strong>at the top level</strong>. Don’t call Hooks
        inside loops, conditions, or nested functions.
      </li>
      <li className='li1'>
        Only call Hooks <strong>from React function components</strong>. Don’t
        call Hooks from regular JavaScript functions. (There is just one other
        valid place to call Hooks
      </li>
    </ul>
    <p className='p2'>
      <br />
    </p>
    <p className='p1'>
      <strong>
        Lets Code!<span className='Apple-converted-space'>&nbsp;</span>
      </strong>
    </p>
    <p className='p2'>
      <br />
    </p>
    <p className='p1'>
      <strong>Building Your Own Hooks</strong>
    </p>
    <p className='p3'>
      <br />
    </p>
    <p className='p1'>
      Note: The state of components is completely independent. Hooks are a way
      to reuse <em>stateful logic</em>, not state itself.
    </p>
    <p className='p2'>
      <br />
    </p>
    <p className='p1'>Other Hooks!</p>
    <ul className='ul1'>
      <li className='li1'>
        <strong>useContext</strong>
      </li>
    </ul>
    <p className='p2'>
      <br />
    </p>
    <p className='p4'>
      <strong>Optimising Performance by Skipping Effects</strong>
    </p>
    <p className='p2'>
      <br />
    </p>
    <p className='p2'>
      <br />
    </p>
  </div>
);

export default Intro;
