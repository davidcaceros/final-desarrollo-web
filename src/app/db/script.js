CREATE SEQUENCE seq_cliente_final START 1;

CREATE TABLE cliente_final(
    id INT DEFAULT NEXTVAL('seq_cliente_final'),
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    genero  CHAR(1),
    fecha_nacimiento    TIMESTAMP NOT NULL,
    estado  VARCHAR(15) NOT NULL,
    CONSTRAINT pk_cliente PRIMARY KEY(id)
);

INSERT INTO cliente_final(nombres, apellidos, genero, fecha_nacimiento, estado) VALUES('David', 'Caceros', 'M', NOW(), 'activo');

