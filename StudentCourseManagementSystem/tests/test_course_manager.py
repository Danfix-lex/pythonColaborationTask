import unittest
from managers.course_manager import CourseManager
from models.student import Student

class TestCourseManager(unittest.TestCase):
    my_course = CourseManager()
    my_student = Student(1, "John", "0000")
    def test_student_can_be_added_to_managers_list(self):
        my_course = CourseManager()
        my_student = Student(1, "John", "0000")
        my_course.add_student(my_student)
        self.assertEqual(my_course.get_size, 1)

    def test_more_student_can_be_added_to_managers_list(self):
        my_course = CourseManager()
        my_student = Student(1, "John", "0000")
        my_course.add_student(my_student)
        self.assertEqual(my_course.get_size, 1)

        my_student2 = Student(0, "Stephen", "2020")
        my_course.add_student(my_student2)
        self.assertEqual(my_course.get_size, 2)
