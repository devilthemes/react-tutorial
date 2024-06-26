export const ComponentD = ()=>{
    const data = "<div><iframe src='http://www.nepalstock.com' width='500' height='500'></iframe><h3>Student</h3> <ul><li>One</li><li>Two</li></ul></div>"
    return (
        <>
    
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
    </>)
}