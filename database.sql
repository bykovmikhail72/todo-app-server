create TABLE person(
    id SERIAL PRIMARY KEY,
    login VARCHAR(255),
    password VARCHAR(255),
    role VARCHAR(255)
);

create TABLE TODO(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    finishDate VARCHAR(255),
    createDate VARCHAR(255),
    updateDate VARCHAR(255),
    priority VARCHAR(255),
    status VARCHAR(255),
    creator VARCHAR(255),
    worker VARCHAR(255)
);