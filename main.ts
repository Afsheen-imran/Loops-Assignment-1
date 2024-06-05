// 1. Creating a Lesson Plan(Using for loop )

let mywork =  []

for (let i = 1; i <= 10; i++) {
    
    let lesson = {
        name: `Lesson ${i}`,
        status: i % 2 === 1
    };
    mywork.push(lesson);
}

console.log(mywork);



