const classes = (...names:(string|undefined)[])=>{
    return names.join(',').replace(/,/g," ")
}
export default classes
