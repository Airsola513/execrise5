function Base() {
    this.events = {}
}

var p = Base.prototype

p.on = function(eventName, fn) {
    ;(this.events[eventName] = this.events[eventName] || [])
        .push(fn)
}

p.trigger = function (eventName, parma) {
    var self = this
    ;(this.events[eventName] || [] ).forEach(function (fn) {
    fn.call(self,parma)
    } )
}


// jQuery.extend
function merge(a, b) {
    if (!b) return a
    for (var key in b) {
        a[key] = b[key]
    }
    return a
}

Base.extend = function (prototype, static) {
    var Super = this
    function S() {}
    S.prototype = Super.prototype
    
    function Klass() {
        Super.call(this)
    }
    Klass.prototype = merge(new S, prototype)
    return merge( merge(Klass, Base), static )
}

module.exports = Base