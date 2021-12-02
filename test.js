// function romanToInt( s ) {
//     // write code here
//    let sum=0;
//    for(let i=0;i<s.length;i++){
//        switch(s[i]){
//         case 'I':
//                if(s[i+1]=='V'){
//                    sum+=4
//                }else if(s[i+1]=='X'){
//                    sum+=9
//                }else{
//                    sum+=1
//                }
//                ++i
//             break
//         case 'X':
//                if(s[i+1]=='L'){
//                    sum+=40
//                }else if(s[i+1]=='C'){
//                    sum+=90
//                }else{
//                    sum+=10
//                }
//                ++i
//             break
//         case 'C':
//                if(s[i+1]=='D'){
//                    sum+=400
//                }else if(s[i+1]=='M'){
//                    sum+=900
//                }else{
//                    sum+=100
//                }
//                ++i
//             break
//         default:
//             if(s[i+1]=='V'){
//                 sum+=5
//             }else if(s[i+1]=='L'){
//                 sum+=50
//             }else if(s[i+1]=='D'){
//                 sum+=500
//             }else if(s[i+1]=='M'){
//                 sum+=1000
//             }
//        }
       
//    }
//     return sum
// }

// console.log(romanToInt( 'III' ))
tArray='abcdefg'
let i=2
tArray=tArray.slice(0,i)+tArray.slice(i+1)
console.log(-2.5 | 0 )