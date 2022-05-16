const fs = require ('fs')

// Add student 

const addStudent = (id,name,comment,degree,sum)=>{
    const students = studentfile()
    sum = 0
    const uniquID = students.find((studentID)=>{
        return studentID.id == id
    }
    )
    degree.forEach((marks)=>{
        return sum = sum + marks
    })

    if(!uniquID){
        students.push(
            {
                id : id ,
                name : name ,
                comment : comment,
                degree : degree,
                sum : sum
            }
        )
        savestudent(students)
        console.log("Student added Successfully")
    }
    else{
        console.log("This ID was entered before")
    }
}

// Delete Function 
const deletestudent = (id) =>{
    const students = studentfile()
    const s = students.filter((obj)=>{
        return obj.id !== id
    })
    if (students.length !== s.length){
        console.log(s)
        savestudent(s)
        console.log('Student deleted Successfully')
    }
    else {
        console.log('Student ID not found to delete')
    }
    }

// Read Function 
const readstudent = (id)=>{
    const students = studentfile();
    const s = students.find((studentID)=>{
        return studentID.id == id
    })
    if(s){
        console.log(s.id,s.name,s.sum)
    }
    else{
        console.log("Student ID not found to read")
    }
    }

// list Function 
const studentlist = ()=>{
    const students = studentfile()
    students.forEach((el)=>{
        console.log(el.name)
    })
}


// studentfile function 
const studentfile = ()=>{
    try{
        const studentdata = fs.readFileSync('student.json').toString() 
        return JSON.parse(studentdata)
    }
    catch(e){
        return []
    }
}


// Save Student data 
const savestudent = (students)=>{
    const savedata = JSON.stringify(students)
    fs.writeFileSync('student.json',savedata)
}


// Export Modules 
module.exports={
    addStudent,
    deletestudent,
    readstudent,
    studentlist
}