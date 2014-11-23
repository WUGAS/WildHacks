-- insert dummy users

USE switch;

INSERT INTO `switch`.`users` (`users`.`username`, `users`.`password`)
VALUES ('tester1','rootroot');

INSERT INTO `switch`.`users` (`users`.`username`, `users`.`password`)
VALUES ('tester2','rootroot');

INSERT INTO `switch`.`users` (`users`.`username`, `users`.`password`)
VALUES ('tester3','rootroot');

INSERT INTO `switch`.`users` (`users`.`username`, `users`.`password`)
VALUES ('tester4','rootroot');

INSERT INTO `switch`.`users` (`users`.`username`, `users`.`password`)
VALUES ('tester5','rootroot');

INSERT INTO `switch`.`users` (`users`.`username`, `users`.`password`)
VALUES ('tester6','rootroot');


-- insert dummy groups
INSERT INTO `switch`.`groups` (`groups`.`name`)
VALUES ('Champions');

INSERT INTO `switch`.`groups` (`groups`.`name`)
VALUES ('Cage Match');

INSERT INTO `switch`.`groups` (`groups`.`name`)
VALUES ('Go Catz');


--join users to groups

INSERT INTO `switch`.`in_group` ('in_group'.`username`,`in_group`.`group_id`)
VALUES ('tester6', 1);

INSERT INTO `switch`.`in_group` ('in_group'.`username`,`in_group`.`group_id`)
VALUES ('tester1', 1);



INSERT INTO `switch`.`in_group` ('in_group'.`username`,`in_group`.`group_id`)
VALUES ('tester6', 0);

INSERT INTO `switch`.`in_group` ('in_group'.`username`,`in_group`.`group_id`)
VALUES ('tester1', 0);



INSERT INTO `switch`.`in_group` ('in_group'.`username`,`in_group`.`group_id`)
VALUES ('tester6', 0);

INSERT INTO `switch`.`in_group` ('in_group'.`username`,`in_group`.`group_id`)
VALUES ('tester5', 2);

INSERT INTO `switch`.`in_group` ('in_group'.`username`,`in_group`.`group_id`)
VALUES ('tester4', 2);

INSERT INTO `switch`.`in_group` ('in_group'.`username`,`in_group`.`group_id`)
VALUES ('tester3', 2);

INSERT INTO `switch`.`in_group` ('in_group'.`username`,`in_group`.`group_id`)
VALUES ('tester2', 2);

INSERT INTO `switch`.`in_group` ('in_group'.`username`,`in_group`.`group_id`)
VALUES ('tester6', 2);



