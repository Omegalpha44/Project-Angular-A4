-- create database
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
insert into project values (4, 'cours de math', 'cours de math', '2021-01-01');
insert into project values (5, 'cours de francais', 'cours de francais', '2021-01-01');

insert into card values (1, 'card 1', 'Qui est l empereur de france le plus connu ? ', 'Napoleon', 1);
insert into card values (2, 'card 2', 'Quel est le meilleur endroit du pôle universitaire leonard de vinci ?', 'le Fablab', 1);

insert into card values (4, 'card 3', 'combien font 2*2 ?', '4', 4);
insert into card values (5, 'card 4', 'combien font 2*3 ?', '6', 4);
insert into card values (6, 'card 5', 'lequel de ces nombres est un nombre premier ? 1, 7, 9', '7', 4);

insert into card values (7, 'card 6', 'quel est le contraire de la vie ?', 'la mort', 5);
insert into card values (8, 'card 7', 'quel est le contraire de la mort ?', 'la vie', 5);
insert into card values (9, 'card 8', 'Quelle figure de style est utilisée dans la phrase suivante : "Le soleil se levait à l’horizon, tel un grand disque rouge" ?', 'une comparaison', 5);
insert into card values (10, 'card 9', 'quel poete a ecrit le bateau ivre ?', 'Arthur Rimbaud', 5);
select * from project;