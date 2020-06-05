// // var ar = ["SJ", "S9", "D8","C10", "D6", "D10","S1", "SA", "HK","C4", "H2","H10", "H5", "C9", "DA", "CK"]; //input DECK

// //     ar.sort();
// //     // document.write(ar + "<br>") 
// //     checkArr= [[],[],[],[]];

// //      for(var i = 0 ; i < ar.length ; i++){  // storing data seperately in each element of checkArr

// //                 var ele = " ";

// //                 ele = ar[i];

// //                 ele = ele.charAt(0);

// //                 if(ele == "C"){
// //                     checkArr[0].push(ar[i]);
// //                     // document.write(a[1]);
// //                     // a[0] = fix(a[0]);
// //                  }else if(ele  == "D"){
// //                     checkArr[1].push(ar[i]);
// //                     // a[1] = fix(a[1]);
// //                 }
// //                 else if(ele  == "H"){
// //                     checkArr[2].push(ar[i]);
// //                     // a[2] = fix(a[2]);
// //                 }
// //                 else if(ele  == "S"){
// //                     checkArr[3].push(ar[i]);
// //                     // a[3] = fix(a[3]);
// //                 }

// //             }

// //             for(var f = 0 ; f < checkArr.length ; f++){
// //                 var ar_len = 0;
// //                  ar_len = checkArr[f].length;
// //                 for(var s = 0 ; s < ar_len ; s++){
// //                      var val = " ";
// //                      val = checkArr[f][s]; 
// //                     //  console.log(val); 
                     
// //                      if(val.length  > 2){
// //                     //    document.write(fix(checkArr[f]))
// //                         //  var ar = fix(checkArr[f])
// //                         //  checkArr[f] = ar;
// //                         var ars = checkArr[f];
// //                        ars =  fix(ars);
// //                        checkArr[f] = ars;
// //                         // checkArr[f] = [...ars];
// //                         break;
// //                      }

// //                 }

// //             }
// //             function fix(q){             // sperate number after 9 and before alphabate
// //             for (var i = 0; i < q.length; i++) {
// //             var ten = "";
// //             for (var j = 0; j < q.length; j++) {
// //             var e = " ";
// //             e = q[j];
// //             if (e.length > 2) {
// //                 ten = e;
// //             }
// //         }
// //             var ele = " ";
// //             ele = q[i];
// //             if (ele.includes("A") || ele.includes("J") || ele.includes("Q") || ele.includes("K")  ) {
// //                 q.splice(i, 0, ten)
// //                 q.shift();

// //                 return q;
// //             }
// //         }

// //     }
// //     checkArr; //return this output deck

// //     console.log(checkArr);
// //             // document.write(checkArr+ "<br>");
            
// //             // document.write(no);



// let a = ["C2", "C4", "C5", "C6","C8", "CK", "D9", "DQ", "H4","HQ", "HK", "S7", "S8","S9","SA"]; //input
// let b = [2,4,5,6,8,"K",9,"Q",4,"Q","K",7,8,9,"A"];
// let joker = 7;
// jokerCount = 1; 
// filtered = [[],[],[],[]];
// separatedCard = [[],[],[],[]];
// output = [[],[],[],[]] //output
// for(var idx in a){
//     if (a[idx].substring(0,1) == "C"){
//          separatedCard[0].push(b[idx]);   
//          filtered[0].push(a[idx]);   
//     } else if (a[idx].substring(0,1) == "D"){
//         separatedCard[1].push(b[idx]);
//         filtered[1].push(a[idx]);   
//     }else if (a[idx].substring(0,1) == "H"){
//         separatedCard[2].push(b[idx]);
//         filtered[2].push(a[idx]);   
//     } else {
//         separatedCard[3].push(b[idx]);
//         filtered[3].push(a[idx]);   

//     }
// }
// for(i = 0; i<separatedCard.length; i++){
//     if(separatedCard[i].length > 2){
// loop2:
//         for(j=0; j< separatedCard[i].length; j++){
//             function T1(){
//                 output[i].splice((j-1),1);
//                 output[i].splice((j-2),1);
//                 j++;
//             }
//             if(typeof(separatedCard[i][j]) == "number"){
//                 output[i].push(separatedCard[i][j]);
//                 while((separatedCard[i][j+1])- (separatedCard[i][j]) < 2){
//                     output[i].splice(j,1);
//                     j++;
//                 }
//             }else {
//                if (separatedCard[i][j-2] == 9  && separatedCard[i][j-1] == 10 && separatedCard[i][j] == "J"){
//                     T1();
//                     } else if ( separatedCard[i][j-2] == 10 && separatedCard[i][j-1] == "J"&& separatedCard[i][j] == "Q"){
//                         T1();
//                         } else if ( separatedCard[i][j-2] == "J"&& separatedCard[i][j-1] == "Q"&& separatedCard[i][j] == "K"){
//                             T1();
//                             } else if ( separatedCard[i][j-2] == "Q"&& separatedCard[i][j-1] == "K"&& separatedCard[i][j] == "A"){
//                                 T1();
//                                 } else if ( separatedCard[i][j-2] == "A"&& separatedCard[i][j-1] == 2 && separatedCard[i][j] == 3){
//                                     T1();
//                                     } else {
//                                         output[i].push(separatedCard[i][j]);
//                                         }

//             }
//         }
                
//     } else {
//         for(z = 0;z<separatedCard[i].length; z++)
//         output[i].push(separatedCard[i][z]);
//     }

// }

// let temp = [];
//     for(m = 0; m<separatedCard.length; m++){
//         for(n = 0; n<separatedCard[m].length; n++){
//             loop3:
//             for(p = 0;p<output.length;p++){
//                 if(separatedCard[m][n] == output[m][p]){
//                     temp.push(filtered[m][n]);
//                     break loop3;
//                 }
//             }
//         }
//     }
// // console.log(filtered);
// console.log(separatedCard);
// console.log(output);
// console.log(temp);