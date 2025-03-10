from StudentCourseManagementSystem.models.student import Student
from StudentCourseManagementSystem.models.course import Course
from StudentCourseManagementSystem.models.instructor import Instructor


class DataBase:
    def __init__(self):
        self.students: list[Student] = []
        self.courses: list[Course] = []
        self.instructors: list[Instructor] = []

    def save_to_file(self):
        with open('students.txt', 'w') as f:
            f.write('Students:\n')
            for student in self.students:
                f.write(f"{student.user_id},{student.username},{student.password.decode('utf-8')}\n")

        with open('instructors.txt', 'w') as u:
            u.write('Instructors:\n')
            for instructor in self.instructors:
                u.write(f"{instructor.user_id},{instructor.username},{instructor.password.decode('utf-8')}\n")
            u.write('Courses:\n')
            for course in self.courses:
                u.write(f"{course.course_id},{course.name},{course.credits}\n")

    def load_from_file(self):
        try:
            with open('students.txt', 'r') as f:
                section = None
                for line in f:
                    line = line.strip()
                    if not line:
                        continue
                    if line == 'Students:':
                        section = 'students'
                    elif section == 'students' and line:
                        try:
                            user_id, username, password_hash = line.split(',')
                            password_hash = password_hash.encode('utf-8')
                            self.students.append(Student(int(user_id), username, password_hash))
                        except ValueError:
                            print(f"Error reading student data: {line}")

            with open('instructors.txt', 'r') as u:
                section = None
                for line in u:
                    line = line.strip()
                    if not line:
                        continue
                    if line == 'Instructors:':
                        section = 'instructors'
                    elif section == 'instructors' and line:
                        try:
                            user_id, username, password_hash = line.split(',')
                            password_hash = password_hash.encode('utf-8')
                            self.instructors.append(Instructor(int(user_id), username, password_hash))
                        except ValueError:
                            print(f"Error reading instructor data: {line}")

                    if line == 'Courses:':
                        section = 'courses'
                    elif section == 'courses' and line:
                        try:
                            course_id, name, credits = line.split(',')
                            self.courses.append(Course(int(course_id), name, int(credits)))
                        except ValueError:
                            print(f"Error reading course data: {line}")

        except FileNotFoundError:
            print("No previous data found, starting fresh.")
        except ValueError as e:
            print(f"Error reading data from file: {e}")