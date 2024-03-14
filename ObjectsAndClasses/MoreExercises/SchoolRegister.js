function schoolRegister(studentsInfo) {
    const objStudents = {}
    const result = []

    for (const info of studentsInfo) {
        const splitsInfo = info.split(': ')
        const name = splitsInfo[1].split(', ')[0]
        const grade = parseInt(splitsInfo[2].split(', ')[0]) + 1
        const averageScore = parseFloat(splitsInfo[3])

        if (averageScore < 3) {
            continue
        }
        if (!(grade in objStudents)) {
            objStudents[grade] = {'names': [], 'averageScores': []}
        }

        objStudents[grade].names.push(name)
        objStudents[grade].averageScores.push(averageScore)
    }

    const sortedStudents = Object.entries(objStudents).sort((a, b) => a - b)

    sortedStudents.forEach(([grade, student]) => {
        const averageScore = student.averageScores.reduce((a, b) => b + a, 0)
        const infoStudent =
            `${grade} Grade\n` +
                `List of students: ${student.names.join(', ')}\n` +
                `Average annual score from last year: ${(averageScore / student.averageScores.length).toFixed(2)}\n`


        result.push(infoStudent)
    })

    return result.join('\n')

}

console.log(schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]))