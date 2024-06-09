-- db/seed.sql
\c summaries

INSERT INTO articles (title, summary, created_at, updated_at)
VALUES 
('some gigantic title', 'summary text. more text, and even more over here', NOW(), NOW());