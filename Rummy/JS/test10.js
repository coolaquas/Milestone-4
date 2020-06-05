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

["C3", "C5", "CQ", "D10", "D9", "DQ", "H2", "H4", "H6", "H7", "S5", "S6", "SJ"]


let b = ["D10", "D7", "D5", "D9"];
function sortHand(arr_){
    let b = arr_;
    let c = [];
    var alpha = "";
     alpha = b[0].charAt(0);
    for (var ind in b){
        c.push(b[ind].substring(1,3));
    }
    c.sort();
    var no = [];
    
    if(c.includes("10") == true){
        for(var i in c){
          if(c[i] == "J" || c[i] == "K" ||c[i] == "A" ||c[i] == "Q"){
              var ind_no = i;
              var val = []
              c.splice(0,1);
              c.splice(i-1,0,"10");
              val = c.slice(i,c.length);
              for(var i in val){
                    no[i] = val[i];
              }
              break;
          }
        }
    }
    if(c.includes("10") == false){
        for(var i in c){
          if(c[i] == "J" || c[i] == "K" ||c[i] == "A" ||c[i] == "Q"){
              var ind_no = i;
              var val = []
              val = c.slice(i,c.length);
              c.splice(i,c.length - i);
              for(var i in val){
                    no[i] = val[i];
              }
              break;
          }
        }
    }
    if(no.length == 3 && no.includes("Q") == true && no.includes("A") == true && no.includes("K") == true){
        no[0] = "Q";
        no[1] = "K";
        no[2] = "A";
    }
    if(no.length == 3 && no.includes("Q") == true && no.includes("J") == true && no.includes("K") == true){
        no[0] = "J";
        no[1] = "Q";
        no[2] = "K";
    }
    
    if(no.length == 2 && no.includes("Q") == true && no.includes("A") == true){
        no[0] = "Q";
        no[1] = "A";
    }
    if(no.length == 2 && no.includes("K") == true && no.includes("A") == true){
        no[0] = "K";
        no[1] = "A";
    }
    
        if(no.length == 2 && no.includes("Q") == true && no.includes("K") == true){
                no[0] = "Q";
                no[1] = "K";
        }
       if(no.length >= 2 && no.includes("A") == true && no.includes("J") == true){
            no.splice(no.indexOf("A"),1);
            no.splice(no.indexOf("J"),1);
            no.splice(0,0,"J");
            no.splice(no.length , 0,"A");
            if(no.includes("K") == true && no.includes("Q") == true && no.indexOf("K") < no.indexOf("Q") ){
                var no_1 = no.indexOf("K");
                var no_2  = no.indexOf("Q");
                no[no_1] = "Q";
                    no[no_2] = "K";
            }
        }
        var new_arr = [];
      for(var i = 0 ; i < c.length ; i++){
          new_arr.push(c[i]);
            if(c[i] == "10"){
                break;
            }
            
      }
        for(var i in no){
            new_arr.push(no[i])
        };
        c = new_arr;
        for(var j in c ){
            c[j] = alpha + c[j]; 
        }
            return c ;
     }
console.log(sortHand(b));