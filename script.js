// 1. Napisz funkcję JavaScript, która przyjmuje jako dane wejściowe tablicę liczb 
//    i zwraca nową tablicę, w której każda liczba jest podwojona.
// 2. Wykorzystaj metodę map() do zaimplementowania funkcji. 
//    Wewnątrz metody map() użyj funkcji strzałkowej, aby podwoić każdą liczbę.
// 3. Przetestuj swoją funkcję, tworząc tablicę liczb i przekazując ją jako argument do swojej funkcji. 
//    Wyświetl oryginalną tablicę i tablicę podwojoną w konsoli.

const doubleNumber = (numbers) => {
    return numbers.map((number)=>number*2)
    
};
const tab = [-1000, -100, -10, -5, -1, 0, 1, 5, 10, 100, 1000];
const double = doubleNumber(tab);
console.log(tab);
console.log(double);


// 4. Napisz funkcję JavaScript, która przyjmuje jako dane wejściowe tablicę obiektów reprezentujących 
//    studentów i zwraca nową tablicę zawierającą tylko imiona studentów.
// 5. Wykorzystaj metodę map() do zaimplementowania funkcji. Wewnątrz metody map() użyj funkcji strzałkowej, 
//    aby uzyskać dostęp do właściwości name każdego obiektu studenta.
// 6. Przetestuj swoją funkcję, tworząc tablicę obiektów studentów i przekazując ją jako argument 
//    do swojej funkcji. Wyświetl oryginalną tablicę obiektów studentów oraz tablicę zawierającą 
//    tylko imiona w konsoli.

const studentName = (students) =>{
    const names = students.map(student => student.name);
    return names
}



const students = [  
{ name: "Mango", score: 83 },  
{ name: "Poly", score: 59 },  
{ name: "Ajax", score: 37 },  
{ name: "Kiwi", score: 94 },  
{ name: "Houston", score: 64 },
];

const names = studentName (students)
console.log(students)
console.log(names);