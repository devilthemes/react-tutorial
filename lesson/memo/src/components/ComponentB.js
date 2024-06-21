import {memo} from 'react'
function ComponentB(props){
    console.log("Trigger Component B");
    return <div> Component B {props.count}</div>
}

export default memo(ComponentB);