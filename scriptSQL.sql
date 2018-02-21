CREATE TABLE person
(
    personId integer not null primary key,
    firstName NVARCHAR(100) not null,
    lastName NVARCHAR(100) not null,
    email NVARCHAR(250) not null
);
GO
CREATE TABLE post
(
    postId int not null primary key,
    title NVARCHAR(100),
    content NVARCHAR(100),
    personId INTEGER FOREIGN key references person(personId)
)
GO;
CREATE INDEX personId_Idx
on person (personId);
GO;
CREATE INDEX postId_Idx
on post (postId);
GO;
CREATE INDEX postId_personId_Idx
on post (postId, personId);