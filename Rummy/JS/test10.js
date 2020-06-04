// var ar = ["SJ", "S9", "D8","C10", "D6", "D10","S1", "SA", "HK","C4", "H2","H10", "H5", "C9", "DA", "CK"]; //input DECK

//     ar.sort();
//     // document.write(ar + "<br>") 
//     checkArr= [[],[],[],[]];

//      for(var i = 0 ; i < ar.length ; i++){  // storing data seperately in each element of checkArr

//                 var ele = " ";

//                 ele = ar[i];

//                 ele = ele.charAt(0);

//                 if(ele == "C"){
//                     checkArr[0].push(ar[i]);
//                     // document.write(a[1]);
//                     // a[0] = fix(a[0]);
//                  }else if(ele  == "D"){
//                     checkArr[1].push(ar[i]);
//                     // a[1] = fix(a[1]);
//                 }
//                 else if(ele  == "H"){
//                     checkArr[2].push(ar[i]);
//                     // a[2] = fix(a[2]);
//                 }
//                 else if(ele  == "S"){
//                     checkArr[3].push(ar[i]);
//                     // a[3] = fix(a[3]);
//                 }

//             }

//             for(var f = 0 ; f < checkArr.length ; f++){
//                 var ar_len = 0;
//                  ar_len = checkArr[f].length;
//                 for(var s = 0 ; s < ar_len ; s++){
//                      var val = " ";
//                      val = checkArr[f][s]; 
//                     //  console.log(val); 
                     
//                      if(val.length  > 2){
//                     //    document.write(fix(checkArr[f]))
//                         //  var ar = fix(checkArr[f])
//                         //  checkArr[f] = ar;
//                         var ars = checkArr[f];
//                        ars =  fix(ars);
//                        checkArr[f] = ars;
//                         // checkArr[f] = [...ars];
//                         break;
//                      }

//                 }

//             }
//             function fix(q){             // sperate number after 9 and before alphabate
//             for (var i = 0; i < q.length; i++) {
//             var ten = "";
//             for (var j = 0; j < q.length; j++) {
//             var e = " ";
//             e = q[j];
//             if (e.length > 2) {
//                 ten = e;
//             }
//         }
//             var ele = " ";
//             ele = q[i];
//             if (ele.includes("A") || ele.includes("J") || ele.includes("Q") || ele.includes("K")  ) {
//                 q.splice(i, 0, ten)
//                 q.shift();

//                 return q;
//             }
//         }

//     }
//     checkArr; //return this output deck

//     console.log(checkArr);
//             // document.write(checkArr+ "<br>");
            
//             // document.write(no);



let a = ["C2", "C4", "C6", "C9", "CK", "D9", "DQ", "H4","H9", "HJ", "HK", "S9", "S7", "SA"]; //input
let b = [2,4,6,9,"k",9,"q",4,9,"j","k",9,7,"a"];
let c = [2,4,6,"k","q",4,"j","k",7,"a"];
output = ["C2", "C4", "C6", "CK", "DQ", "H4", "HJ", "HK", "S7", "SA"] //output
let t1 = [];
for(i=0;i<b.length;i++){
loop1:
    for(j=0;j<c.length;j++){
        if(b[i] == c[j]){
            t1.push(a[i]);
            break loop1;
        }

    }
}
a = t1;
console.log(a);