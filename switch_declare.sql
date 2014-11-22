CREATE DATABASE switch;
USE switch;

CREATE TABLE `groups` (
  `group_id` int(10) NOT NULL,
  `name` varchar(45) NOT NULL,
  `data` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `users` (
  `user_id` int(10) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `in_group` (
  `user_id` int(11) NOT NULL,
  `in_id` int(11) NOT NULL,
  `group_score` int(11) NOT NULL DEFAULT '0',
  `group.id` int(11) DEFAULT NULL,
  PRIMARY KEY (`in_id`),
  KEY `fk_user_id_idx` (`user_id`),
  KEY `fk_group_id_idx` (`group.id`),
  CONSTRAINT `fk_group_id` FOREIGN KEY (`group.id`) REFERENCES `groups` (`group_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

