-- Disable foreign key checks to avoid conflicts while truncating
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE AssignmentGrades;
TRUNCATE TABLE Enrollment;
TRUNCATE TABLE Assignments;
TRUNCATE TABLE Courses;
TRUNCATE TABLE StudenterCanvas;

-- Re-enable foreign key checks after truncating
SET FOREIGN_KEY_CHECKS = 1;
