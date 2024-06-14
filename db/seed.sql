-- db/seed.sql
\c news

INSERT INTO articles (title, abstract, created_at, updated_at)
VALUES 
('some gigantic title', 'a very small abstract', NOW(), NOW());

INSERT INTO summaries (summary, article_id, created_at, updated_at)
VALUES
('summary', 1, NOW(), NOW());