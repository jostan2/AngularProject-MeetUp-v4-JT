CREATE DATABASE EventDb

----{(change database path to EventDb)}----

--CREATE TABLE [dbo].[Event](
--	[Id] [int] IDENTITY(1,1) NOT NULL,
--	[Name] [nvarchar](50) NULL,
--	[Description] [nvarchar](150) NULL,
--	[Category] [nvarchar](30) NULL,
--	[Price] [decimal](10, 2) NULL,
--	[Favorite] [bit] NOT NULL,
--);

--insert into Event
--values('Arcade Meet Up', 'Help support local Arcade. Bring lots of quarters.', 'Games', '10.00', '0'), 
--	('Hike @ Local Mt.', 'Join us in hiking around the Mt. Sequels trail paths', 'Outdoors.', '0.00', '0'),
--	('Spartan 10k Race', 'Race along City Angulars beaches and obstacle courses to win first place.', 'Sport', '50.00', '0'), 
--	('Bird Watching @ Angular Valley', 'Bring binoculars to see Angular Valleys local fowl species.', 'Outdoors', '0.00', '0');