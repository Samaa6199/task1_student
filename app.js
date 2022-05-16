const yargs = require('yargs')
const student = require('./student')

// Add 

yargs.command({
    command:'add',
    describe:'Add Student',
    builder:{
        id:{
            describe:'Student ID',
            type:'number',
            demandOption:true
        },
        name:{
            describe:'Student Name',
            type:'string',
            demandOption:true
        },
        comment:{
            describe:'Comment about Student',
            type:'string',
        },
        degree:{
            describe:'Student Mark',
            type:'array',
            demandOption: true
        },
        sum:{
            describe:' Student total mark',
            type: 'number'
        }
    },
    handler:()=>{
        student.addStudent(yargs.argv.id , yargs.argv.name , yargs.argv.comment ,yargs.argv.degree , yargs.argv.sum)
    }
})


// Delete 

yargs.command({
    command:'delete',
    describe:'Delete Student',
    builder:{
        id:{
            describe:'Student ID',
            type:'number',
            demandOption:true
        },
    },
    handler:()=>{
        student.deletestudent(yargs.argv.id)
    }
})

// Read
yargs.command({
    command:'read',
    describe:'Read Student Data',
    builder:{
        id:{
            describe:'Student ID',
            type:'number',
            demandOption:true
        },
    },
    handler:()=>{
        student.readstudent(yargs.argv.id, yargs.argv.name, yargs.argv.sum)
    }
})

// List 
yargs.command({
    command:'list',
    describe:'Student List',
    handler:()=>{
        student.studentlist(yargs.argv.name)
    }
})


console.log(yargs.argv)