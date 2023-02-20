import React from 'react';

// export function Greeting() {
// export const Greeting = (props) => {
  export const Greeting = ({name, numberOfMessages}) => {
    // console.log(props);
    // const { name, numberOfMessages} = props;
    if (!name) return null;
    let isMorning = (new Date()).getHours() < 12;
    let greetingHeader = isMorning
        ? ( 
            <>
                {/* <h3>Good Morning {props.name}!</h3>
                <p>You have {props.numberOfMessages} new messages</p> */}
                <h3>Good Morning! {name}!</h3>
                <p>You have {numberOfMessages} new messages</p>
            </>
        )
        :(
            <>
                {/* <h3>Good Evening {props.name}!</h3>
                <p>You have {props.numberOfMessages} new messages</p> */}
                <h3>Good Evening {name}!</h3>
                <p>You have {numberOfMessages} new messages</p>
            </>
        )


    return isMorning
      ? (
        <>
            {greetingHeader}
        </>
        )
      : (
        <>
            {greetingHeader}
        </>        
      )
     
}

// export default Greeting;