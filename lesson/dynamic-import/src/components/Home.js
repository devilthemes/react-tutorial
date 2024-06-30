import { Suspense } from "react"
export default ()=> <><Suspense fallback={<div>Page is Loading...</div>}><h1>Home</h1></Suspense></>