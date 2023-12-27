create database node_project;

drop table card;
drop table project;


create table project(
    project_id serial primary key,
    name varchar(500) not null,
    description varchar(500) not null,
    created_at date not null
);

create table card(
    card_id serial primary key,
    name varchar(500) not null,
    element_1 varchar(500) not null,
    element_2 varchar(500) not null,
    project_id int not null,
    foreign key (project_id) references project(project_id)

    );

insert into project values (1, 'project 1', 'description 1', '2021-01-01');
insert into project values (2, 'project 2', 'description 2', '2021-01-01');

insert into card values (1, 'card 1', 'Qui est l empereur de france le plus connu ? ', 'Napoleon', 1);
insert into card values (2, 'card 2', 'Quel est le meilleur endroit du pôle universitaire leonard de vinci ?', 'le Fablab', 1);