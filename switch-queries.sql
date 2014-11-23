
-- Gets the list of group IDs and groups names that a user is in
SELECT `groups`.`name`, `groups`.`group_id` 
FROM `switch`.`groups`, 
WHERE `groups`.`group_id` in 
	(SELECT `in_group`.`group_id` 
    FROM `in_group` as ing
    WHERE `in_group`.`username`=?);


--Use this one
SELECT g.`name`, g.`group_id`, dat.`group_score` 
FROM `test`.`groups` as g 
	JOIN  `test`.`in_group` as dat
    ON (g.`group_id` = dat.`group_id`)
WHERE dat.`username`=?;


--Updates the users score in the table
UPDATE `switch`.`in_group`
SET `in_group`.`group_score`=?
WHERE`in_group`.`in_id`=?;


--check if a user exists. 1 if true, else 0
SELECT SUM(*) FROM `switch`.`users` WHERE `users`.`username`=?;


--Adds a user to table
INSERT INTO `switch`.`users` (`users`.`username`, `users`.`password`)
VALUES (?,?);

--user join a group
INSERT INTO `switch`.`in_group` ('in_group'.`username`,`in_group`.`group_id`)
VALUES (?, ?);

--user leaves from a group
DELETE FROM `switch`.`in_group`
WHERE `in_group`.`username`=? AND `in_group`.`group_id`=?;

--Adds a group to the table
INSERT INTO `switch`.`groups` (`groups`.`group_id`, `groups`.`name`)
VALUES (?,?);

INSERT INTO `switch`.`in_group` ('in_group'.`username`,`in_group`.`group_id`)
VALUES (?, ?);