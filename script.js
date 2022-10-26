alert("مرحبا بك في موقعي الذي سيحسب درجتك!")
let grade = prompt("اكتب درجتك بالارقام")
console.log(grade)
if (grade >=90) {
    console.log("%c لقد حصلت علي امتياز" )
}
else if (grade>=80) {
    console.log(" %c لقد حصلت علي جيد جدا")
}
else if ( grade>=70 ) {
    console.log(" %c لقد حصلت علي جيد")
}
else if ( grade>=60 ) {
    console.log(" %c لقد حصلت علي مقبول")
}
else if (grade>=50) {
    console.log("%c لقد حصلت علي ضعيف")
}
else if(grade<=50){
    console.log ("%c راسب")
}