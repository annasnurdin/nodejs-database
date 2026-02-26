create table sample 
(
    id varchar(100) not null,
    name varchar(100) not null,
    primary key (id)
) engine innodb;

SELECT * from sample;

CREATE TABLE customers (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT null,
    phone VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    constraint customer_email_unique UNIQUE (email),
    constraint customer_email_phone UNIQUE (phone)
) engine innodb;

SELECT * FROM customers;