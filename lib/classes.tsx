interface Options{
  extra:string | undefined
}

interface ClassToggles {
  [K:string]:boolean //ts的声明语法,意思是key为string类型，value为布尔值的 对象
}
function scopedClassMaker(prefix: string) {

  return function x(name?: string | ClassToggles,options?:Options) {
    //name = {hasAside:true,active:false,x:true,y:false}
    let name2;
    let result
    if (typeof name2==='string'||name ===undefined){
      name2 = name
      result = [prefix,name2].filter(Boolean).join('-') //如果传进来字符串 'header'，直接合并就变成 gu-layout-header
    }else{
      name2 = Object.entries(name).filter(kv=>kv[1]).map(kv=>kv[0]) //如果传进来的是对象，先过滤掉 value为false 的 key，比如 {hasAside:true,active:false,x:true,y:false} 过滤后就变成 ['hasAside','x']
      result = name2.map(n=>{
        return [prefix,n].filter(Boolean).join('-') // 合并后变成 ['.gu-layout-hasAside','.gu-layout-x']
      }).join(' ') //数组变成字符串 '.gu-layout-hasAside .gu-layout-x'
    }
    if (options&&options.extra){
      return [result,options&&options.extra].filter(Boolean).join(' ')
    }else{
      return result
    }
  };
}

export {scopedClassMaker};
