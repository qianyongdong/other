const sum=(a,b)=>a+b

enum State{
    pending="pending",
    resolved="resolved",
    rejected="rejected"
}
const noop=()=>{}
class MyPromise{
    constructor(exclutor){
        exclutor(this._resolve.bind(this),this._reject.bind(this))
    }
    _state:State=State.pending
    _value:any
    _resArray=[]
    _resolve(val){
        this._value=val
        this._state=State.resolved
        while(this._resArray.length>0){
            const item=this._resArray.shift()
            const result = item.handle(this._value)
            const nextPromise=item.promise
            if(result instanceof MyPromise){
                result.then(val=>item.promise._resolve(val))
            }else{
                item.promise._resolve(result)
            }
        }
    }
    _reject(val){
        this._value=val
        this._state=State.rejected
    }
    
    then(onRes,onRej=noop){
        const newPromise= new MyPromise(()=>{})
        this._resArray.push({promise:newPromise,handle:onRes})
    }
    catch(rej){
        rej(this._value)
    }
}



export  {sum,MyPromise}