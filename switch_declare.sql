CREATE DATABASE switch;

USE switch;


CREATE TABLE groups (
  group_id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(45) NOT NULL,
  data varchar(255) DEFAULT NULL,
  PRIMARY KEY (group_id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE groups AUTO_INCREMENT = 0; 

CREATE TABLE users (
  username varchar(45) NOT NULL,
  password varchar(45) NOT NULL,
  PRIMARY KEY (username)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE in_group (
  in_id int(11) NOT NULL AUTO_INCREMENT,
  group_id int(11) NOT NULL,
  username varchar(45) NOT NULL,
  group_score INT NOT NULL DEFAULT 0,
  PRIMARY KEY (in_id),
  KEY fk_username_idx (username),
  KEY fk_group_id_idx (group_id),
  CONSTRAINT fk_group_id FOREIGN KEY (group_id) REFERENCES groups (group_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_username FOREIGN KEY (username) REFERENCES users (username) ON DELETE NO ACTION ON UPDATE NO ACTION,
  UNIQUE  (username, group_id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE in_group AUTO_INCREMENT = 0;

