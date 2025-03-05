
from managers.course_manager import CourseManager, RepeatedCourseCreationException
from models import student, instructor
from models.instructor import Instructor, CourseAlreadyCreatedException
from models.student import Student

from managers.course_manager import CourseManager


def main():
    course_manager = CourseManager()
    while True:
        print("""\nWelcome to the Student Course Management System!)
        1. Register
        2. Login as Instructor
        3. Login as Student
        4. Exit
        """)
        choice = input("\nEnter your choice! ")

        match choice:
            case "1":
                register(course_manager)
            case "2":
                login_as_instructor(course_manager)
            case "3":
                login_as_student(course_manager)
            case "4":
                print("loging out...")
                break
            case _:
                print("Invalid input!\nEnter integers from 1 to 4 only!")

def validate_id(prompt1):
    while True:
        try:
            return int(input(prompt1))
        except ValueError:
            print("Invalid Id\nId can only be entered as integer")

def validate_credit_unit(prompt2):
    while True:
        try:
            return int(input(prompt2))
        except ValueError:
            print("Invalid Credit Unit\nCredit unit can only be entered as integer")

def register_as_instructor(course_manager):
    user_id = validate_id("Please enter your id")
    username = input("Please enter your username: ")
    password = input("Please enter your password: ")
    instructor = Instructor(user_id, username, password)
    course_manager.add_instructor(instructor)
    print(f"Instructor {username} registered successfully!")


def register_as_student(course_manager):
    user_id = validate_id("Please enter your id")
    username = input("Please enter your username: ")
    password = input("Please enter your password: ")
    student = Student(user_id, username, password)
    course_manager.add_student(student)
    print(f"Student {username} registered successfully!")

def login_as_instructor(course_manager):
    username = input("Please enter your username: ")
    password = input("Please enter your password: ")
    instructor = next((person for person in course_manager.instructors if person.username == username), None)
    if instructor and instructor.verify_password(password):
        print(f"Instructor {username} logged in successfully!")
        instructor_login(instructor, course_manager)
    else:
        print(f"Your attempt to login was unsuccessfully!\nDue to and invalid username or password\nOr you not have registered with us!")
        option = input("Would you like to register as an instructor?\nchoose between the option (yes/no) ").lower()
        if option == "yes":
            register_as_instructor(course_manager)
        elif option == "no":
            return
        else:
            print("Invalid input!\nEnter either 'yes' or 'no'")
            option = input("Would you like to register as a student?\nchoose between the option (yes/no) ").lower()

def login_as_student(course_manager):
    username = input("Please enter your username: ")
    password = input("Please enter your password: ")
    student = next((person for person in course_manager.students if person.username == username), None)
    if student and student.verify_password(password):
        print(f"Student {username} logged in successfully!")
        student_login(course_manager)
    else:
        print(f"Your attempt to login was unsuccessfully!\nDue to and invalid username or password")
        option = input("Would you like to register as a student?\nchoose between the option (yes/no) ").lower()
        if option == "yes":
            register_as_student(course_manager)
        elif option == "no":
            return
        else:
            print("Invalid input!\nEnter either 'yes' or 'no'")
            option = input("Would you like to register as a student?\nchoose between the option (yes/no) ").lower()

def instructor_login(instructor, course_manager):
    while True:
        print("""
        1. Create a course
        2. View students in a course
        3. Grade a student
        4. Logout
        """)

        choice = input("What would you like to do? ")

        match choice:
            case "1":
                create_course(instructor, course_manager)
            case "2":
                view_students_in_course(instructor, course_manager)
            case "3":
                grade_students(instructor, course_manager)
            case "4":
                print("loging out....")
                break
            case _:
                print("Invalid input!\nEnter integers from 1 and 4 only!")

def create_course(instructor, course_manager):
    course_id = validate_id("Please enter your course id")
    course_name = input("Please enter course name: ")
    credit_unit = validate_credit_unit("Please enter course credit unit: ")
    try:
        instructor.create_course(course_id, course_name, credit_unit, course_manager)
        print(f"Course {course_id} created successfully!")
    except CourseAlreadyCreatedException as e:
        print(e)
    except RepeatedCourseCreationException as e:
        print(e)

def view_students_in_course(instructor, course_manager):
    course_id = validate_id("Please enter your id")
    students = instructor.view_students(course_id, course_manager)
    print(f"Student in course {course_id}:")
    if students:
        for student in students:
            print(f"{student.username}: {student.username}")
    else:
        print("No student has been enrolled in your course.")

def grade_students(instructor, course_manager):
    student_id = validate_id("Please enter your student id")
    course_id = validate_id("Please enter course id")
    grade = input("Please enter your student grade: ")
    result = instructor.grade_student(student_id, course_id, grade)
    if result:
        print(f"Student {student_id} graded successfully!")
    else:
        print(f"This course has not been graded yet\nOr you did not seat for the exam!")

def student_login(course_manager):
    while True:
        print("""
        1. Enroll in course
        2. View_course_instructor
        3. view_course_grade
        4. Logout
        """)

        choice = input("Enter your choice! ")
        match choice:
            case "1":
                enroll_in_a_course(course_manager)
            case "2":
                view_course_instructor(course_manager)
            case "3":
                view_course_grade(course_manager)
            case "4":
                print("Loging out...")
                break
            case _:
                print("Invalid input!\nEnter integers from 1 and 4 only!")

def enroll_in_a_course(course_manager):
    course_id = validate_id("Please enter course id")
    course_name = input("Please enter course name: ")
    if course_manager.get_course(course_id):
        print(f"You are now enrolled in {course_name}: {course_id}")
    else:
        print(f"{course_name}: {course_id} does not exist\n It may not have been created\nYou may visit the portal to lay your complain!")

def view_course_instructor(course_manager):
    course_id = validate_id("Please enter course id")
    course_name = input("Please enter course name: ")
    instructor = course_manager.get_course(course_id)
    print(f"Instructor for {course_name} {course_id}: {instructor}")

def view_course_grade(course_manager):
    course_id = validate_id("Please enter course id")
    if course_manager.get_course(course_id):
        for course_id, grade in grades.items():
            print(f"Grade for {course_id}: {grade if grade else 'Grade has not been awarded yet\nOr you may not have sat for the exam!'}")

def register(course_manager):
    while True:
            choice = input("Do you want to register as an instructor or  a student\n Enter 1 for student or 2 for instructor: ")
            if choice == "1":
                register_as_instructor(course_manager)
                break
            elif choice == "2":
                register_as_student(course_manager)
                break
            else:
                print("Invalid input!\nEnter 1 aor 2 only!")

if __name__ == "__main__":
     main()