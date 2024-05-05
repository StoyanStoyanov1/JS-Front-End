function softUniStudents(arrInput) {
    class Course {
        constructor(name, capacity) {
            this.name = name;
            this.capacity = Number(capacity);
            this.students = [];
        }

        addCapacity(capacity) {
            this.capacity += Number(capacity);
        }

        addStudents(student) {
            if (this.capacity > 0) {
                this.students.push(student);
                this.capacity -= 1;
                return true;
            }
        }

        sortedStudentsByCredits() {
            this.students.sort((a, b) => b.credits - a.credits);
        }

    }

    class Student {
        constructor(username, credits, email) {
            this.username = username;
            this.credits = Number(credits);
            this.email = email;
        }
    }

    const courses = []

    for (const input of arrInput) {
        if (input.includes(':')) {
            const [courseName, capacity] = input.split(': ');
            const foundCourse = courses.find(course => course.name === courseName);
            if (!foundCourse) {
                const newCourse = new Course(courseName, capacity);
                courses.push(newCourse);
            } else {
                foundCourse.addCapacity(capacity)
            }
        } else {
            const user = input.substring(0, input.indexOf('['));
            const credits = input.substring(input.indexOf('[') + 1, input.indexOf(']'));
            const email = input.substring(input.indexOf('email ') + 6, input.indexOf(' join'));
            const courseName = input.substring(input.indexOf('joins ') + 6);

            const foundCourse = courses.find(course => course.name === courseName)
            if (foundCourse) {
                const newStudent = new Student(user, credits, email);
                foundCourse.addStudents(newStudent);
            }

        }
    }

    courses.sort((a, b) => b.students.length - a.students.length);

    const result = courses.reduce((acc, course) => {
        acc.push(`${course.name}: ${course.capacity} places left`);
        course.sortedStudentsByCredits();
        course.students.forEach(student => {
            let output = `--- ${student.credits}: ${student.username}, ${student.email}`;
            acc.push(output);
        })
        return acc
    }, []);

    return result.join('\n')
}

console.log(softUniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']))