// // // var a = '大佬';
// // // [].filter.call(a,function (param) {
// // //     console.log(param)  
// // // })
// // // var search = function(nums, target) {
// // //     nums.indexOf(target)
// // // };
// // // console.log(search([1,2,3],3))
// // // var twoSum = function(numbers, target) {
// // //     for(let index in numbers){
// // //         let i = index
// // //         while(i++<numbers.length){
// // //             if(numbers[index]+numbers[i]==target) return [(+index+1),i+1]
// // //         }
// // //     }
// // // };
// // // console.log(twoSum([5,25,75],100))
// var minWindow = function(s, t) {
//     let left=right=0
//       let min,sl=s.length,tl=t.length,minl,indexArr=[]
//       while(left<sl){
//           right=left+t.length
//           while(right<=sl){
//               let count=0
//               let strArr=s.substring(left,right).split('')
//               console.log(strArr,1)
//               for(let i=0;i<tl;i++){
//                 let isFalse=false 
//                  strArr=strArr.filter(cur=>{
//                      if(cur==t[i]&&!isFalse){
//                         isFalse=!isFalse
//                         return false
//                      }
//                      return true
//                     })
//                  isFalse&&count++
//               }
//               //console.log(strArr,2)
//             //   if(count>=tl){
//             //     console.log(strArr,3)
//             //       if(min){
//             //           if(right-left<min) min=right-left
//             //           minl=left
//             //       }else{
//             //           min=right-left
//             //           minl=left
//             //       }
//             //       break
//             //   }
//               if(count>=tl){
//                   console.log(strArr,3)
//                   if(min==0) console.log(111111,strArr.length,min>strArr.length)
//                   if(min||min==0){
//                       console.log('nn',minl,min)
//                       if(min>strArr.length){
//                         minl=left
//                         min=strArr.length
//                       }
//                       console.log('mm',minl,min)
//                   }else{
//                       minl=left
//                       min=strArr.length
//                   }
//                   break
//               }
//               right++
//           }
//           left++
//       }
//       return s.substring(minl,minl+min+tl)
//   };

// var minWindow = function(s, t) {
//     let left=right=0
//     let sl=s.length,tl=t.length
//     let minl,min;
//     while(left<sl){
//         right=left
//         let count=0
//         let tArray=t.split('')
//         while(right<sl){
//             for(let i=0;i<tArray.length;i++){
//                 if(tArray[i]==rightChar){
//                     tArray.splice(i,1)
//                     count++
//                     break
//                 }
//             }
//             if(count==tl) break
//             right++
//         }
//         if(count==tl){
//             if(!min){
//                 minl=left
//                 min=right-left
//             }else if(right-left<min){
//                 minl=left
//                 min=right-left
//             }
//         }
//         left++
//     }
//     return min+1?s.substr(minl,min+1):''
// };
// var minWindow = function(s, t) {
//     let minLen=Infinity,start
//     let map={},missingType=0
//     for(const char of t){
//         if(!map[char]){
//             map[char]=1
//             missingType++
//         }else{
//             map[char]++
//         }
//     }
//     let left=right=0
//     for(;right<s.length;right++){
//         let rightChar=s[right]
//         if(map[rightChar]!==undefined){
//             map[rightChar]--
//         }
//         if(map[rightChar]===0){
//             missingType--
//         }
//         while(missingType===0){
//             if(right-left+1<minLen){
//                 minLen=right-left+1
//                 start=left
//             }
//             let leftChar=s[left]
//             if(map[leftChar]!==undefined){
//                map[leftChar]++
//             }
//             if(map[leftChar]>0){
//                 missingType++
//             }
//             left++
//         }
//     }
//     return s.substring(start,start+minLen)
// };
//console.log(minWindow("aa","aa"))
// console.log(minWindow("cabwefgewcwaefgcf","cae"))
// console.log(minWindow("aaabdabcefaecbef","abc"))
// console.log(minWindow("ADOBECODEBANC","ABC"))
// console.log(minWindow("a","a"))
// console.log(minWindow("bba","ab"))
// function Satck() {
//     this.items=[];
//     Satck.prototype.pop=function(){
//         return this.items.pop()
//     }
//     Satck.prototype.push=function(element){
//         this.items.push(element)
//     }
//     Satck.prototype.isEmpty=function(){
//         return this.items.length==0
//     }
// }

// function dec2num(decNumber) {
//     let stack=new Satck()
//     while(decNumber>0){
//         stack.push(decNumber%2)
//         decNumber = Math.floor(decNumber/2) 
//     }
//     let binaryString=''
//     while(!stack.isEmpty()){
//         binaryString+=stack.pop()
//     }
//     return binaryString
//   }

//   console.log(dec2num(10))
//   console.log(dec2num(100))
//   let sta=new Satck()
//   sta.push(1)
//   console.log(sta)

    // class Queue{

    //     constructor(){
    //         this.items=[]
    //     }
    //     enqueue(element){
    //         this.items.push(element)
    //       }
    //     dequeue(){
    //         return this.items.shift()
    //       }
    //     front(){
    //         return this.items[0]
    //     }
    //     isEmpty(){
    //         return this.items.length==0
    //     }
    //     size(){
    //         return this.items.length
    //     }
    //     toString(){
    //         return this.items.reduce((sum,ele)=>sum+=ele,'')
    //     }
    // }
    // let a=new Queue()
    // console.log(a)
    // a.enqueue(1)
    // a.enqueue(2)
    // a.enqueue(3,4)
    // console.log([1,2].toString())

//    function passGame(nameList,num) {
//     let queue=new Queue()
//     nameList.forEach(element => {
//         queue.enqueue(element)
//     });
    
//     while(queue.size()>1){
//         for(let i=0;i<num;i++){
//             queue.enqueue(queue.dequeue())
//         }
//         queue.dequeue()
//     }
//     return nameList.indexOf(queue.dequeue())
//    }
//    let names =['a','b','c','d','e','f']
// //    console.log(passGame(names,3))

// function twoSum( numbers ,  target ) {
//     // write code here
//     let left=0
//     while(left<numbers.length){
//         let sum=0
//         let right=left+1
//         sum+=numbers[left]
//         console.log(sum)
//         while(right<numbers.length){
//             console.log(left,right)
//             if(sum+numberrightChar==target){
//                 return [left+1,right+1]
//             }
//             right ++
//         }
//         left ++
//     }
    
// }
// console.log(twoSum([2,1,9,4,4,56,90,3],8))
// console.log('123'.substring(1,3))
// var findAnagrams = function(s, p) {
//     let map={},missingType=0
//     for(const char of p){
//         if(!map[char]){
//             map[char]=1
//             missingType++
//         }else{
//             map[char]++
//         }
//     }

//     let left=right=0,array=[]
//     for(;right<s.length;right++){
//         let rightChar=s[right]
//         if(map[rightChar]!==undefined){
//             map[rightChar]--
//         }
//         if(map[rightChar]===0){
//             missingType--
//         }
//         while(missingType===0){
//             console.log(left,right)
//             if(right-left+1===0){
//                 array.push(left)
//                 console.log(left)
//             }
//             let leftChar=s[left]
//             if(map[leftChar]!==undefined){
//                 map[leftChar]++
//             }
//             if(map[leftChar]>0){
//                 missingType++
//             }
//             left++
//         }
//     }

//     return array
// };
// console.log(findAnagrams("cbaebabacd","abc"))
var lengthOfLongestSubstring = function(s) {
    let maxLen=-Infinity
    let start=end=0
    
    return maxLen
};
console.log(lengthOfLongestSubstring("pwwkew"))