-- db/seed.sql
\c news

INSERT INTO articles (title, summary, created_at, updated_at)
VALUES 
('some gigantic title', 'summary text. more text, and even more over here', NOW(), NOW());

INSERT INTO summaries (summary, article_id, created_at, updated_at)
VALUES
('summary', 1, NOW(), NOW());