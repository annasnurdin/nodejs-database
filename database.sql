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

CREATE TABLE products (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL,
    PRIMARY KEY (id)
) engine innodb;

SELECT * from products;

INSERT INTO products(id, name, price, stock, category) value
('P001', 'A', 1000, 1000, 'K1'),
('P002', 'B', 2000, 1000, 'K1'),
('P003', 'C', 3000, 1000, 'K1'),
('P004', 'D', 4000, 1000, 'K1'),
('P005', 'E', 5000, 1000, 'K1');

INSERT INTO products(id, name, price, stock, category) value
('P006', 'A2', 1000, 1000, 'K4'),
('P007', 'B3', 2000, 1000, 'K2'),
('P008', 'C4', 3000, 1000, 'K2'),
('P009', 'D5', 4000, 1000, 'K4'),
('P0010', 'E6', 5000, 1000, 'K3');