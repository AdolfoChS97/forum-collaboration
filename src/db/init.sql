CREATE DATABASE IF NOT EXISTS project;

CREATE TABLE IF NOT EXISTS project.THEMES (
  ID INT NOT NULL AUTO_INCREMENT COMMENT 'Identificador del autogenerado del tema',
  TITLE VARCHAR(60) NOT NULL COMMENT 'Titulo del tema',
  THEME VARCHAR(100) NOT NULL COMMENT 'Descripcion breve del tema',
  AUTHOR VARCHAR(50) NULL DEFAULT 'Anonymous' COMMENT 'Nombre del autor del tema',
  CREATED_AT TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Marca de tiempo para identificar la fecha y hora de creacion del tema',
  UPDATED_AT TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Marca de tiempo para identificar la fecha y hora de modificacion del tema',
  PRIMARY KEY (ID)
) COMMENT='Tabla para almacenar los temas';

CREATE TABLE IF NOT EXISTS project.REPLIES (
  ID INT NOT NULL AUTO_INCREMENT COMMENT 'Identificador del autogenerado de la respuesta',
  THEME_ID INT NOT NULL COMMENT 'Identificador del ID del tema al cual pertenece la respuesta',
  REPLY VARCHAR(255) NOT NULL COMMENT 'ΩRespuesta al tema',
  AUTHOR VARCHAR(50) NULL DEFAULT 'Anonymous' COMMENT 'Nombre del autor de la respuesta al tema',
  CREATED_AT TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Marca de tiempo para identificar la fecha y hora de creacion de la respuesta',
  UPDATED_AT TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Marca de tiempo para identificar la fecha y hora de modificacion de la respuesta',
  PRIMARY KEY (ID),
  FOREIGN KEY (THEME_ID) REFERENCES project.THEMES (ID) ON DELETE CASCADE
) COMMENT='Tabla para almacenar las respuestas a los temas';