class Base {
     
    constructor() {
        this.events = []
    }
    //实例方法
    on(eventName,fn) {
        // 单个监听事件写法    
        // this.events[eventName] = fn


        //  处理了同个事件名称 多个函数监听的情况
        (this.events[eventName] = this.events[eventName] || [])
            .push(fn)

    }

    trigger(eventName,parma){
        // 单个监听事件写法    
        // this.events[eventName].call(this,parma)

        // 多个监听事件写法
        (this.events[eventName] || [] ).forEach((fn) => {
            fn.call(this,parma)
        } );
        // this.eventArry[eventName](parma).bind(this)

    }
}


module.exports = Base