import React from 'react'
import Input from './Input'
import TextArea from './TextArea'

const RedCard = () => {
  return (
    <div id="redcard">
      <div>
        <h1>&ldquo;PLAN TO SUCCEED&rdquo;</h1>
        <div className="rc-date">
          <span>Date: <Input type="date" /></span>
        </div>
        <div className="rc-section rc-section-goals">
          <h2>MY GOALS</h2>
          <ol>
            <li>
              <span>
                <span className="rc-u">I CAN</span> - <span className="rc-u">I WILL</span> BE A SUCCESS
              </span>
            </li>
            <li><Input /></li>
            <li><Input /></li>
            <li><Input /></li>
            <li><Input /></li>
          </ol>
        </div>
        <div className="rc-section">
          <h2>I MUST DO TODAY</h2>
          <ol>
            <li><Input /></li>
            <li><Input /></li>
            <li><Input /></li>
            <li><Input /></li>
            <li><Input /></li>
          </ol>
        </div>
        <div className="rc-section">
          <h2>I SHOULD DO TODAY</h2>
          <ol>
            <li><Input /></li>
            <li><Input /></li>
            <li><Input /></li>
            <li><Input /></li>
            <li><Input /></li>
          </ol>
        </div>
        <div className="rc-section">
          <h2>I COULD DO TODAY</h2>
          <ol>
            <li><Input /></li>
            <li><Input /></li>
            <li><Input /></li>
            <li><Input /></li>
            <li><Input /></li>
          </ol>
        </div>
      </div>
      <div>
        <div className="rc-section rc-section-call">
          <h2>PEOPLE TO CALL TODAY</h2>
          <div className="rc-heading">
            <span>Name</span>
            <span>Telephone</span>
          </div>
          <ol>
            <li><span><Input /></span><span><Input /></span></li>
            <li><span><Input /></span><span><Input /></span></li>
            <li><span><Input /></span><span><Input /></span></li>
            <li><span><Input /></span><span><Input /></span></li>
            <li><span><Input /></span><span><Input /></span></li>
            <li><span><Input /></span><span><Input /></span></li>
            <li><span><Input /></span><span><Input /></span></li>
            <li><span><Input /></span><span><Input /></span></li>
            <li><span><Input /></span><span><Input /></span></li>
            <li><span><Input /></span><span><Input /></span></li>
          </ol>
        </div>
        <div className="rc-section">
          <h2>NOTES</h2>
          <TextArea />
        </div>
        <div className="rc-section">
          <h2>DAY'S EXPENSES</h2>
          <TextArea />
        </div>
        <div className="rc-quote-wrapper">
          <div className="rc-quote">
            Nothing great has
            <br />
            ever been accomplished
            <br />
            without
            <br />
            PLANNING + EXECUTION
          </div>
          <div>
            <i>Complete unpleasant tasks first</i>
          </div>
        </div>
        <div className="rc-legal">
          Copyright &copy; 2019
        </div>
      </div>
    </div>
  )
}

export default RedCard
