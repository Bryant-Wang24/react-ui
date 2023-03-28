const classes = (...names:(string|undefined)[])=>{
    return names.filter(Boolean).join(' ')
}
export default classes

interface Options{
    extra:string | undefined
}

interface ClassToggles {
    [K:string]:boolean //ts的声明语法,意思是key为string类型，value为布尔值的 对象
}
const scopedClassMaker = (prefix: string) =>{
        //name = {hasAside:true,active:false,x:true,y:false}
    return (name: string | ClassToggles, options?: Options) =>
      Object
        .entries(name instanceof Object ? name : {[name]: name})
        .filter(kv => kv[1] !== false && kv[1] !== undefined)
        .map(kv => kv[0])
        .map(name => [prefix, name]
          .filter(Boolean)
          .join('-'))
        .concat(options && options.extra || [])
        .join(' ');
        // if (typeof name==='string'||name ===undefined){
        //     name2 = name
        //     result = [prefix,name2].filter(Boolean).join('-') //如果传进来字符串 'header'，直接合并就变成 gu-layout-header
        // }else{
        //     name2 = Object.entries(name).filter(kv=>kv[1]).map(kv=>kv[0]) //如果传进来的是对象，先过滤掉 value为false 的 key，比如 {hasAside:true,active:false,x:true,y:false} 过滤后就变成 ['hasAside','x']
        //     result = name2.map(n=>{
        //         return [prefix,n].filter(Boolean).join('-') // 合并后变成 ['.gu-layout-hasAside','.gu-layout-x']
        //     }).join(' ') //数组变成字符串 '.gu-layout-hasAside .gu-layout-x'
        // }
}


export {scopedClassMaker};
