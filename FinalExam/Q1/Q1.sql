create database FinalExamDB;
    
SELECT * FROM CS457.student;

CREATE TABLE `FinalExamDB`.`Students` (
  `StudID` INT NOT NULL AUTO_INCREMENT,
  `StudentName` VARCHAR(45) NULL,
  `GPA` FLOAT NULL,
  PRIMARY KEY (`StudID`));

INSERT INTO `FinalExamDB`.`Students` (`StudID`, `StudentName`, `GPA`) VALUES ('123', 'Susan', '3.1');
INSERT INTO `FinalExamDB`.`Students` (`StudID`, `StudentName`, `GPA`) VALUES ('456', 'Billy', '2.5');
INSERT INTO `FinalExamDB`.`Students` (`StudID`, `StudentName`, `GPA`) VALUES ('777', 'Maria', '3.3');
INSERT INTO `FinalExamDB`.`Students` (`StudID`, `StudentName`, `GPA`) VALUES ('789', 'Alice', '4.0');
