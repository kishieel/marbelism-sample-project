import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('5333dad9-096f-4dd1-8b42-24d9ae30d4e8', '1Jazmyn.Graham@yahoo.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'mno345pqr678', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('9b7f5fe3-d16a-4c26-9f96-525331115fac', '9Brett67@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=11', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('bd9f6366-e1dc-45ca-93f5-20bbef027594', '17Patience23@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=19', 'mno345pqr678', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('14afedd9-92c9-4576-8ce2-1a0da2346d53', '25Sherman.Bogan31@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=27', 'stu901vwx234', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('18991117-caec-49cc-b5a5-7ddcd4f6fe47', '33America.Legros29@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=35', 'abc123def456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('23172e92-34a5-4d7a-8293-ffbc84330a02', '41Zelma31@gmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=43', 'abc123def456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('f84535ce-700e-4080-a68f-8e8db064efef', '49Lourdes59@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=51', 'mno345pqr678', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('28119feb-93b4-4fb2-b437-bebfa1e21ea8', '57Maye_Schultz@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=59', 'mno345pqr678', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('190b894d-6d27-4ceb-beec-8873aaeb4cde', '65Darrell.Sipes43@gmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=67', 'abc123def456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('120f2311-4eed-489d-afe9-72c4d8b34045', 'eyJ1c2VySWQiOiI3ODkwYWJjZGVmIiwic3Vic2NyaXB0aW9uSWQiOiIxMjM0NTY3ODkwYWJjZGVmIiwidG9rZW4iOiJmZ2hpamtsbW5vcHFyc3R1dnd4eXoifQ', '23172e92-34a5-4d7a-8293-ffbc84330a02');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('15e63ffa-f87d-4fd4-a4b2-f7ebe641c6e9', 'eyJ1c2VySWQiOiI1Njc0MzIxOTgiLCJzdWJzY3JpcHRpb25JZCI6Ijg5MGFiY2RlZjEyMzQ1NjciLCJ0b2tlbiI6ImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6In0', 'f84535ce-700e-4080-a68f-8e8db064efef');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('717a151c-c0bc-46e9-ad4c-20712c83a1b2', 'eyJ1c2VySWQiOiI5ODc2NTQzMjEiLCJzdWJzY3JpcHRpb25JZCI6IjEyMzQ1Njc4OTBhYmNkZWYiLCJ0b2tlbiI6ImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6In0', '9b7f5fe3-d16a-4c26-9f96-525331115fac');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('562cc343-4b39-4d45-bf6d-cdd3ea53cfb5', 'eyJ1c2VySWQiOiI3ODkwYWJjZGVmIiwic3Vic2NyaXB0aW9uSWQiOiIxMjM0NTY3ODkwYWJjZGVmIiwidG9rZW4iOiJmZ2hpamtsbW5vcHFyc3R1dnd4eXoifQ', '190b894d-6d27-4ceb-beec-8873aaeb4cde');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('e1ccd815-c477-4bea-b91b-2d2d1fd1237c', 'eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwic3Vic2NyaXB0aW9uSWQiOiJhYmNkZWYxMjM0NTY3ODkwIiwidG9rZW4iOiJmZ2hpamtsbW5vcHFyc3R1dnd4eXoifQ', 'f84535ce-700e-4080-a68f-8e8db064efef');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('1986d2ce-0f6e-427f-a6da-6e9069005d58', 'eyJ1c2VySWQiOiI5ODc2NTQzMjEiLCJzdWJzY3JpcHRpb25JZCI6IjEyMzQ1Njc4OTBhYmNkZWYiLCJ0b2tlbiI6ImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6In0', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('6123f399-bda4-44ed-9de0-f8fdcdb1f10f', 'eyJ1c2VySWQiOiI0MzIxOTg3NjUiLCJzdWJzY3JpcHRpb25JZCI6IjU2Nzg5MGFiY2RlZjEyMzQiLCJ0b2tlbiI6ImZnaGlqa2xtbm9wcXJzdHV2d3h5eiJ9', 'f84535ce-700e-4080-a68f-8e8db064efef');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('3acecf6f-1fe3-48d3-b747-e9e55bfe4892', 'eyJ1c2VySWQiOiI5ODc2NTQzMjEiLCJzdWJzY3JpcHRpb25JZCI6IjEyMzQ1Njc4OTBhYmNkZWYiLCJ0b2tlbiI6ImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6In0', '9b7f5fe3-d16a-4c26-9f96-525331115fac');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('3829ac9e-59c4-4c1f-b3ee-073f88dcdf9f', 'eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwic3Vic2NyaXB0aW9uSWQiOiJhYmNkZWYxMjM0NTY3ODkwIiwidG9rZW4iOiJmZ2hpamtsbW5vcHFyc3R1dnd4eXoifQ', 'f84535ce-700e-4080-a68f-8e8db064efef');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('c72ca747-20eb-4025-979d-de74398938a2', 'eyJ1c2VySWQiOiI5ODc2NTQzMjEiLCJzdWJzY3JpcHRpb25JZCI6IjEyMzQ1Njc4OTBhYmNkZWYiLCJ0b2tlbiI6ImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6In0', '23172e92-34a5-4d7a-8293-ffbc84330a02');

INSERT INTO "Route" ("id", "name", "type", "startLocation", "endLocation", "estimatedDuration") VALUES ('6c0cbfa6-57a1-4b5a-bbb6-de0b7b3c5a7d', 'Metro Link', 'Subway', 'Central Station', 'Shopping District', 383);
INSERT INTO "Route" ("id", "name", "type", "startLocation", "endLocation", "estimatedDuration") VALUES ('c555224d-fb68-4295-a26f-abe12392dbe7', 'City Connector', 'Ferry', 'Central Station', 'University Campus', 357);
INSERT INTO "Route" ("id", "name", "type", "startLocation", "endLocation", "estimatedDuration") VALUES ('563db86e-b5b3-4d24-9014-9f24b8eff986', 'Suburban Shuttle', 'Ferry', 'North Park', 'South Beach', 105);
INSERT INTO "Route" ("id", "name", "type", "startLocation", "endLocation", "estimatedDuration") VALUES ('67628712-f5e5-4d8f-840a-1edad6b4a636', 'Express Line A', 'Tram', 'East Side Terminal', 'South Beach', 665);
INSERT INTO "Route" ("id", "name", "type", "startLocation", "endLocation", "estimatedDuration") VALUES ('22dc29db-ea6a-4b4b-8094-b85225b4466f', 'Suburban Shuttle', 'Ferry', 'North Park', 'Industrial Zone', 576);
INSERT INTO "Route" ("id", "name", "type", "startLocation", "endLocation", "estimatedDuration") VALUES ('bd69e52c-3c45-4b90-8c82-5e7ae2772c32', 'Route 101', 'Tram', 'Downtown Hub', 'University Campus', 559);
INSERT INTO "Route" ("id", "name", "type", "startLocation", "endLocation", "estimatedDuration") VALUES ('7bb1247c-d9b4-41a7-ab35-d799aabe1f6a', 'Metro Link', 'Subway', 'Downtown Hub', 'University Campus', 105);
INSERT INTO "Route" ("id", "name", "type", "startLocation", "endLocation", "estimatedDuration") VALUES ('c0ae5cd0-bf49-49f7-9360-f2a98500cfbd', 'Metro Link', 'Bus', 'East Side Terminal', 'South Beach', 564);
INSERT INTO "Route" ("id", "name", "type", "startLocation", "endLocation", "estimatedDuration") VALUES ('364a8c12-0e86-4fa9-8fec-e1a9ec243c53', 'Express Line A', 'Subway', 'Downtown Hub', 'Airport Terminal', 794);
INSERT INTO "Route" ("id", "name", "type", "startLocation", "endLocation", "estimatedDuration") VALUES ('caee6aa7-ece7-46d9-ab6e-b3ea65aa2e33', 'Metro Link', 'Train', 'Central Station', 'Shopping District', 584);

INSERT INTO "Stop" ("id", "name", "latitude", "longitude", "routeId") VALUES ('72e113cf-6f5d-4414-9753-5c24d7ab3119', 'Greenfield Junction', '40.712776', '74.005974', '364a8c12-0e86-4fa9-8fec-e1a9ec243c53');
INSERT INTO "Stop" ("id", "name", "latitude", "longitude", "routeId") VALUES ('5920a939-effd-4270-80b5-51f29b8dea4f', 'Riverside Terminal', '35.689487', '74.005974', 'c0ae5cd0-bf49-49f7-9360-f2a98500cfbd');
INSERT INTO "Stop" ("id", "name", "latitude", "longitude", "routeId") VALUES ('772c6e24-2fd7-4c66-af9f-1321be1be473', 'City Center Hub', '48.856613', '139.691711', '364a8c12-0e86-4fa9-8fec-e1a9ec243c53');
INSERT INTO "Stop" ("id", "name", "latitude", "longitude", "routeId") VALUES ('1381a491-a914-41d5-84ea-ca3d580b98d6', 'City Center Hub', '34.052235', '118.243683', '7bb1247c-d9b4-41a7-ab35-d799aabe1f6a');
INSERT INTO "Stop" ("id", "name", "latitude", "longitude", "routeId") VALUES ('49f8125f-10f3-4c50-b404-c37291aa0865', 'City Center Hub', '34.052235', '0.127758', 'bd69e52c-3c45-4b90-8c82-5e7ae2772c32');
INSERT INTO "Stop" ("id", "name", "latitude", "longitude", "routeId") VALUES ('3e64ecd1-55a7-4040-8271-afeeba6f9a0e', 'Greenfield Junction', '35.689487', '0.127758', '67628712-f5e5-4d8f-840a-1edad6b4a636');
INSERT INTO "Stop" ("id", "name", "latitude", "longitude", "routeId") VALUES ('88eaed1b-387e-446f-a816-7e7ce1d89c22', 'Greenfield Junction', '34.052235', '118.243683', 'bd69e52c-3c45-4b90-8c82-5e7ae2772c32');
INSERT INTO "Stop" ("id", "name", "latitude", "longitude", "routeId") VALUES ('a86b4bb4-7cd7-4ba9-b0c8-05611a1dfc51', 'City Center Hub', '48.856613', '2.352222', 'c555224d-fb68-4295-a26f-abe12392dbe7');
INSERT INTO "Stop" ("id", "name", "latitude", "longitude", "routeId") VALUES ('6e3fe673-43d3-46f9-90ea-fccba2f6ca9e', 'City Center Hub', '48.856613', '2.352222', '364a8c12-0e86-4fa9-8fec-e1a9ec243c53');
INSERT INTO "Stop" ("id", "name", "latitude", "longitude", "routeId") VALUES ('2718c9b6-4e76-4193-97b0-b39bfab157c9', 'Park Avenue Stop', '34.052235', '74.005974', 'c0ae5cd0-bf49-49f7-9360-f2a98500cfbd');

INSERT INTO "Journey" ("id", "startLocation", "endLocation", "status", "userId") VALUES ('f1a613e2-717a-4d48-8f96-e3863e560d80', 'West End', 'City Center', 'Cancelled', '18991117-caec-49cc-b5a5-7ddcd4f6fe47');
INSERT INTO "Journey" ("id", "startLocation", "endLocation", "status", "userId") VALUES ('833461af-7df0-4f7d-bfdc-acce0b6dc09b', 'Central Station', 'University Campus', 'In Transit', '9b7f5fe3-d16a-4c26-9f96-525331115fac');
INSERT INTO "Journey" ("id", "startLocation", "endLocation", "status", "userId") VALUES ('93d78549-5352-444b-b2c5-7fab14edbffe', 'Central Station', 'University Campus', 'Cancelled', '18991117-caec-49cc-b5a5-7ddcd4f6fe47');
INSERT INTO "Journey" ("id", "startLocation", "endLocation", "status", "userId") VALUES ('6bcde4ec-a6b4-45cf-9604-a2255ab1339b', 'North Park', 'City Center', 'In Transit', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Journey" ("id", "startLocation", "endLocation", "status", "userId") VALUES ('b86cf10e-bc83-4822-a400-b267f0555ecb', 'West End', 'University Campus', 'On Time', '28119feb-93b4-4fb2-b437-bebfa1e21ea8');
INSERT INTO "Journey" ("id", "startLocation", "endLocation", "status", "userId") VALUES ('f908bcb6-e1a4-4ab1-999b-76f7bcf458f2', 'South Gate', 'Airport Terminal', 'On Time', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Journey" ("id", "startLocation", "endLocation", "status", "userId") VALUES ('19245cb8-8f7a-44c9-8226-de6a3e786f67', 'West End', 'City Center', 'In Transit', '9b7f5fe3-d16a-4c26-9f96-525331115fac');
INSERT INTO "Journey" ("id", "startLocation", "endLocation", "status", "userId") VALUES ('a8b7673d-2d36-4f74-b33e-dd6172146a6f', 'Central Station', 'University Campus', 'On Time', '18991117-caec-49cc-b5a5-7ddcd4f6fe47');
INSERT INTO "Journey" ("id", "startLocation", "endLocation", "status", "userId") VALUES ('1ffebd24-44c3-498d-aab8-2e9364f5b2cc', 'North Park', 'Airport Terminal', 'On Time', '18991117-caec-49cc-b5a5-7ddcd4f6fe47');
INSERT INTO "Journey" ("id", "startLocation", "endLocation", "status", "userId") VALUES ('70d32a3b-8b63-4795-9f21-a9a37074301f', 'East Terminal', 'Downtown Hub', 'In Transit', '28119feb-93b4-4fb2-b437-bebfa1e21ea8');

INSERT INTO "JourneyRoute" ("id", "sequence", "journeyId", "routeId") VALUES ('312b2454-b741-4063-9b28-77987f184858', 652, '93d78549-5352-444b-b2c5-7fab14edbffe', '67628712-f5e5-4d8f-840a-1edad6b4a636');
INSERT INTO "JourneyRoute" ("id", "sequence", "journeyId", "routeId") VALUES ('43c6ad1b-cc13-4705-a018-87b17a0a9fda', 738, '93d78549-5352-444b-b2c5-7fab14edbffe', '364a8c12-0e86-4fa9-8fec-e1a9ec243c53');
INSERT INTO "JourneyRoute" ("id", "sequence", "journeyId", "routeId") VALUES ('1cb46e1c-0bb7-45d1-a582-ce1900a646e2', 250, 'f908bcb6-e1a4-4ab1-999b-76f7bcf458f2', 'c0ae5cd0-bf49-49f7-9360-f2a98500cfbd');
INSERT INTO "JourneyRoute" ("id", "sequence", "journeyId", "routeId") VALUES ('09828873-0754-4da0-9c15-16c356ee06fe', 502, 'f908bcb6-e1a4-4ab1-999b-76f7bcf458f2', '22dc29db-ea6a-4b4b-8094-b85225b4466f');
INSERT INTO "JourneyRoute" ("id", "sequence", "journeyId", "routeId") VALUES ('ddffe9bd-f97b-456a-a904-c5368ccd7eba', 879, 'b86cf10e-bc83-4822-a400-b267f0555ecb', 'c0ae5cd0-bf49-49f7-9360-f2a98500cfbd');
INSERT INTO "JourneyRoute" ("id", "sequence", "journeyId", "routeId") VALUES ('921f122d-cacb-4725-a8ab-148400233595', 176, '833461af-7df0-4f7d-bfdc-acce0b6dc09b', 'c555224d-fb68-4295-a26f-abe12392dbe7');
INSERT INTO "JourneyRoute" ("id", "sequence", "journeyId", "routeId") VALUES ('714dcf40-b92a-4ed8-9bbe-5e73fc4fe558', 602, 'f1a613e2-717a-4d48-8f96-e3863e560d80', 'bd69e52c-3c45-4b90-8c82-5e7ae2772c32');
INSERT INTO "JourneyRoute" ("id", "sequence", "journeyId", "routeId") VALUES ('98d86df9-1871-4d80-bfdb-f306064864d7', 843, '93d78549-5352-444b-b2c5-7fab14edbffe', '563db86e-b5b3-4d24-9014-9f24b8eff986');
INSERT INTO "JourneyRoute" ("id", "sequence", "journeyId", "routeId") VALUES ('3a80fb14-1bd5-4628-8669-3be8414d94d3', 887, '70d32a3b-8b63-4795-9f21-a9a37074301f', '22dc29db-ea6a-4b4b-8094-b85225b4466f');
INSERT INTO "JourneyRoute" ("id", "sequence", "journeyId", "routeId") VALUES ('413c5d84-066e-44a4-9574-0158ecf15381', 307, '19245cb8-8f7a-44c9-8226-de6a3e786f67', 'caee6aa7-ece7-46d9-ab6e-b3ea65aa2e33');

INSERT INTO "Subscription" ("id", "notificationType", "userId", "routeId") VALUES ('1d7a8e1c-d15d-4ad6-b056-dcffc335bceb', 'Web Alert', 'f84535ce-700e-4080-a68f-8e8db064efef', 'caee6aa7-ece7-46d9-ab6e-b3ea65aa2e33');
INSERT INTO "Subscription" ("id", "notificationType", "userId", "routeId") VALUES ('25d8884e-ed1b-41e6-986f-db7017dbedd4', 'InApp Message', 'f84535ce-700e-4080-a68f-8e8db064efef', '7bb1247c-d9b4-41a7-ab35-d799aabe1f6a');
INSERT INTO "Subscription" ("id", "notificationType", "userId", "routeId") VALUES ('4a4c0231-8beb-4324-b02d-b4006c7444a9', 'SMS', '14afedd9-92c9-4576-8ce2-1a0da2346d53', '563db86e-b5b3-4d24-9014-9f24b8eff986');
INSERT INTO "Subscription" ("id", "notificationType", "userId", "routeId") VALUES ('2796da8e-de70-44cf-b29e-c1796287b5d0', 'Push Notification', 'bd9f6366-e1dc-45ca-93f5-20bbef027594', '563db86e-b5b3-4d24-9014-9f24b8eff986');
INSERT INTO "Subscription" ("id", "notificationType", "userId", "routeId") VALUES ('fa5acf41-33e3-4eca-9cb3-fe6b2ee902b4', 'SMS', '14afedd9-92c9-4576-8ce2-1a0da2346d53', 'bd69e52c-3c45-4b90-8c82-5e7ae2772c32');
INSERT INTO "Subscription" ("id", "notificationType", "userId", "routeId") VALUES ('c16502b3-7839-455c-9bb6-cf84eb2716ed', 'Web Alert', '5333dad9-096f-4dd1-8b42-24d9ae30d4e8', '67628712-f5e5-4d8f-840a-1edad6b4a636');
INSERT INTO "Subscription" ("id", "notificationType", "userId", "routeId") VALUES ('2853b46d-610b-439d-9f12-2f4138e6c8a5', 'Email', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '563db86e-b5b3-4d24-9014-9f24b8eff986');
INSERT INTO "Subscription" ("id", "notificationType", "userId", "routeId") VALUES ('07796bbe-4d32-4870-a688-872682d2b798', 'Email', 'bd9f6366-e1dc-45ca-93f5-20bbef027594', '7bb1247c-d9b4-41a7-ab35-d799aabe1f6a');
INSERT INTO "Subscription" ("id", "notificationType", "userId", "routeId") VALUES ('48585f76-bd6d-43cc-89bc-c619b3a0ad34', 'Email', '28119feb-93b4-4fb2-b437-bebfa1e21ea8', 'bd69e52c-3c45-4b90-8c82-5e7ae2772c32');
INSERT INTO "Subscription" ("id", "notificationType", "userId", "routeId") VALUES ('6b89fa6c-e5e7-41dd-b193-bb5244272e2b', 'InApp Message', 'bd9f6366-e1dc-45ca-93f5-20bbef027594', 'bd69e52c-3c45-4b90-8c82-5e7ae2772c32');

INSERT INTO "SavedRoute" ("id", "name", "frequency", "userId", "routeId") VALUES ('e9ad1a14-9dea-4377-a9e9-07ee3ba69e80', 'Morning Commute', 'Weekends', '23172e92-34a5-4d7a-8293-ffbc84330a02', 'c555224d-fb68-4295-a26f-abe12392dbe7');
INSERT INTO "SavedRoute" ("id", "name", "frequency", "userId", "routeId") VALUES ('21ffca95-6197-4e5c-a0da-1cd080da000a', 'Evening Express', 'Daily', '9b7f5fe3-d16a-4c26-9f96-525331115fac', '563db86e-b5b3-4d24-9014-9f24b8eff986');
INSERT INTO "SavedRoute" ("id", "name", "frequency", "userId", "routeId") VALUES ('2a11fedf-d018-4e21-9ecf-c38c2bb63321', 'Suburban Connector', 'Weekdays', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '7bb1247c-d9b4-41a7-ab35-d799aabe1f6a');
INSERT INTO "SavedRoute" ("id", "name", "frequency", "userId", "routeId") VALUES ('c9ca0b41-17d2-4e11-a006-0c2c8d3c7fe7', 'Weekend Leisure', 'Weekends', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c555224d-fb68-4295-a26f-abe12392dbe7');
INSERT INTO "SavedRoute" ("id", "name", "frequency", "userId", "routeId") VALUES ('3c56af9c-0696-41fe-ac2a-aa62ff013043', 'Morning Commute', 'Daily', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c555224d-fb68-4295-a26f-abe12392dbe7');
INSERT INTO "SavedRoute" ("id", "name", "frequency", "userId", "routeId") VALUES ('8d4405aa-bafc-4ce9-9b55-eb3a91cef8c9', 'Evening Express', 'Hourly', 'bd9f6366-e1dc-45ca-93f5-20bbef027594', 'c0ae5cd0-bf49-49f7-9360-f2a98500cfbd');
INSERT INTO "SavedRoute" ("id", "name", "frequency", "userId", "routeId") VALUES ('d32f927d-b233-41af-8f68-a9bee14b5532', 'Weekend Leisure', 'Weekdays', '23172e92-34a5-4d7a-8293-ffbc84330a02', '6c0cbfa6-57a1-4b5a-bbb6-de0b7b3c5a7d');
INSERT INTO "SavedRoute" ("id", "name", "frequency", "userId", "routeId") VALUES ('87ea2021-bef3-42eb-b518-d4f5a7e0a682', 'Suburban Connector', 'Weekdays', '5333dad9-096f-4dd1-8b42-24d9ae30d4e8', 'c555224d-fb68-4295-a26f-abe12392dbe7');
INSERT INTO "SavedRoute" ("id", "name", "frequency", "userId", "routeId") VALUES ('917ac38a-586d-497e-8233-071d886474ef', 'Morning Commute', 'Weekends', 'f84535ce-700e-4080-a68f-8e8db064efef', '364a8c12-0e86-4fa9-8fec-e1a9ec243c53');
INSERT INTO "SavedRoute" ("id", "name", "frequency", "userId", "routeId") VALUES ('3e913212-781d-472b-9b0e-902d81c3dffd', 'Evening Express', 'Hourly', '18991117-caec-49cc-b5a5-7ddcd4f6fe47', 'caee6aa7-ece7-46d9-ab6e-b3ea65aa2e33');

INSERT INTO "Delay" ("id", "latitude", "longitude", "delayMinutes", "status", "photoUrl", "description", "userId", "routeId") VALUES ('abdff23b-cf9c-401d-9118-bb083f3644dc', '35.689487', '139.691711', 382, 'resolved', 'https://i.imgur.com/YfJQV5z.png?id=315', 'Unexpected traffic congestion.', '28119feb-93b4-4fb2-b437-bebfa1e21ea8', 'c0ae5cd0-bf49-49f7-9360-f2a98500cfbd');
INSERT INTO "Delay" ("id", "latitude", "longitude", "delayMinutes", "status", "photoUrl", "description", "userId", "routeId") VALUES ('c88135b1-bf79-4198-8ef5-6abdd4e71757', '34.052235', '74.005974', 493, 'resolved', 'https://i.imgur.com/YfJQV5z.png?id=322', 'Accident on the route.', '14afedd9-92c9-4576-8ce2-1a0da2346d53', '67628712-f5e5-4d8f-840a-1edad6b4a636');
INSERT INTO "Delay" ("id", "latitude", "longitude", "delayMinutes", "status", "photoUrl", "description", "userId", "routeId") VALUES ('ea60851f-71e8-40a7-8a1a-39fb1fdb18f2', '40.712776', '118.243683', 452, 'reported', 'https://i.imgur.com/YfJQV5z.png?id=329', 'Weatherrelated delay.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'bd69e52c-3c45-4b90-8c82-5e7ae2772c32');
INSERT INTO "Delay" ("id", "latitude", "longitude", "delayMinutes", "status", "photoUrl", "description", "userId", "routeId") VALUES ('b2e900f9-59a3-4532-8c80-598ae5e153ea', '40.712776', '74.005974', 724, 'inprogress', 'https://i.imgur.com/YfJQV5z.png?id=336', 'Accident on the route.', '190b894d-6d27-4ceb-beec-8873aaeb4cde', '563db86e-b5b3-4d24-9014-9f24b8eff986');
INSERT INTO "Delay" ("id", "latitude", "longitude", "delayMinutes", "status", "photoUrl", "description", "userId", "routeId") VALUES ('6be377e0-8f8d-42c6-94c9-25384293ba2b', '51.507351', '2.352222', 357, 'pending', 'https://i.imgur.com/YfJQV5z.png?id=343', 'Unexpected traffic congestion.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '563db86e-b5b3-4d24-9014-9f24b8eff986');
INSERT INTO "Delay" ("id", "latitude", "longitude", "delayMinutes", "status", "photoUrl", "description", "userId", "routeId") VALUES ('4cdbcd91-7a82-45ef-b8e7-c6c54341e113', '40.712776', '74.005974', 358, 'resolved', 'https://i.imgur.com/YfJQV5z.png?id=350', 'Accident on the route.', '190b894d-6d27-4ceb-beec-8873aaeb4cde', '7bb1247c-d9b4-41a7-ab35-d799aabe1f6a');
INSERT INTO "Delay" ("id", "latitude", "longitude", "delayMinutes", "status", "photoUrl", "description", "userId", "routeId") VALUES ('fb590e2d-a360-4c6a-9b44-f478feb53953', '40.712776', '74.005974', 367, 'verified', 'https://i.imgur.com/YfJQV5z.png?id=357', 'Signal failure at the station.', '23172e92-34a5-4d7a-8293-ffbc84330a02', 'bd69e52c-3c45-4b90-8c82-5e7ae2772c32');
INSERT INTO "Delay" ("id", "latitude", "longitude", "delayMinutes", "status", "photoUrl", "description", "userId", "routeId") VALUES ('5b03e8ea-6982-45c6-ac7b-8bf083336ff7', '34.052235', '0.127758', 250, 'verified', 'https://i.imgur.com/YfJQV5z.png?id=364', 'Unexpected traffic congestion.', '14afedd9-92c9-4576-8ce2-1a0da2346d53', '7bb1247c-d9b4-41a7-ab35-d799aabe1f6a');
INSERT INTO "Delay" ("id", "latitude", "longitude", "delayMinutes", "status", "photoUrl", "description", "userId", "routeId") VALUES ('bd5355dc-0df7-44a3-99f2-e2a59e73cd28', '48.856613', '139.691711', 900, 'inprogress', 'https://i.imgur.com/YfJQV5z.png?id=371', 'Accident on the route.', '28119feb-93b4-4fb2-b437-bebfa1e21ea8', '563db86e-b5b3-4d24-9014-9f24b8eff986');
INSERT INTO "Delay" ("id", "latitude", "longitude", "delayMinutes", "status", "photoUrl", "description", "userId", "routeId") VALUES ('bab1dbba-2abd-46d3-974c-21eb65a7e230', '35.689487', '74.005974', 354, 'resolved', 'https://i.imgur.com/YfJQV5z.png?id=378', 'Mechanical issue with the train.', '18991117-caec-49cc-b5a5-7ddcd4f6fe47', '6c0cbfa6-57a1-4b5a-bbb6-de0b7b3c5a7d');

INSERT INTO "DelayVerification" ("id", "isVerified", "delayId", "userId") VALUES ('5ec23c6e-00c0-4774-95b2-edf21429acd0', true, 'ea60851f-71e8-40a7-8a1a-39fb1fdb18f2', 'bd9f6366-e1dc-45ca-93f5-20bbef027594');
INSERT INTO "DelayVerification" ("id", "isVerified", "delayId", "userId") VALUES ('5ee0aea9-2139-4e5d-96f9-4a865fbc9baf', false, '6be377e0-8f8d-42c6-94c9-25384293ba2b', '14afedd9-92c9-4576-8ce2-1a0da2346d53');
INSERT INTO "DelayVerification" ("id", "isVerified", "delayId", "userId") VALUES ('7c5886cf-cc19-4a7d-ba68-fcec7eca05e5', false, '6be377e0-8f8d-42c6-94c9-25384293ba2b', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "DelayVerification" ("id", "isVerified", "delayId", "userId") VALUES ('fc744a59-7f96-4364-96a0-a38eae9907b2', true, 'b2e900f9-59a3-4532-8c80-598ae5e153ea', '5333dad9-096f-4dd1-8b42-24d9ae30d4e8');
INSERT INTO "DelayVerification" ("id", "isVerified", "delayId", "userId") VALUES ('9df3c225-7a94-4cc9-9ac5-b89b0ff90d55', true, 'fb590e2d-a360-4c6a-9b44-f478feb53953', '14afedd9-92c9-4576-8ce2-1a0da2346d53');
INSERT INTO "DelayVerification" ("id", "isVerified", "delayId", "userId") VALUES ('8af86dbb-e538-429d-a40c-8a894bb540e7', false, 'bd5355dc-0df7-44a3-99f2-e2a59e73cd28', '5333dad9-096f-4dd1-8b42-24d9ae30d4e8');
INSERT INTO "DelayVerification" ("id", "isVerified", "delayId", "userId") VALUES ('a0d6d14e-93ed-47f6-84e7-44105ec04d14', true, 'bd5355dc-0df7-44a3-99f2-e2a59e73cd28', '23172e92-34a5-4d7a-8293-ffbc84330a02');
INSERT INTO "DelayVerification" ("id", "isVerified", "delayId", "userId") VALUES ('845e9ae6-184d-46de-b318-64d7b9b74267', false, '4cdbcd91-7a82-45ef-b8e7-c6c54341e113', '9b7f5fe3-d16a-4c26-9f96-525331115fac');
INSERT INTO "DelayVerification" ("id", "isVerified", "delayId", "userId") VALUES ('fea4f671-ef71-4bf2-a191-f4949a6db367', true, '5b03e8ea-6982-45c6-ac7b-8bf083336ff7', 'bd9f6366-e1dc-45ca-93f5-20bbef027594');
INSERT INTO "DelayVerification" ("id", "isVerified", "delayId", "userId") VALUES ('cdbf3b2f-bb42-4b4b-843c-56417c8516b1', true, 'bab1dbba-2abd-46d3-974c-21eb65a7e230', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
