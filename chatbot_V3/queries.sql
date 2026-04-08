-- NerveSpa Dashboard: PostgreSQL Queries
-- Based on the provided table structures: predefined_questions & chat_messages

-- 1. OVERVIEW PAGE METRICS
---------------------------------------------------------

-- Total Questions in Knowledge Base
SELECT COUNT(*) AS total_predefined_questions FROM predefined_questions;

-- Total User Sessions (Unique session IDs)
SELECT COUNT(DISTINCT session_id) AS total_sessions FROM chat_messages WHERE is_dev = false;

-- Total Messages excluding Developer mode
SELECT COUNT(*) AS total_live_messages FROM chat_messages WHERE is_dev = false;

-- Daily Chatbot Usage (Last 30 Days)
SELECT 
    DATE(created_at) as chat_day, 
    COUNT(*) as message_count 
FROM chat_messages 
WHERE created_at > NOW() - INTERVAL '30 days' AND is_dev = false
GROUP BY chat_day
ORDER BY chat_day ASC;


-- 2. QUESTIONS & ANSWERS MANAGER
---------------------------------------------------------

-- Fetch All Q&A Entries for the table
SELECT id, question, answer, created_at, content FROM predefined_questions ORDER BY created_at DESC;

-- Search Q&A (by keyword)
SELECT id, question, answer FROM predefined_questions 
WHERE question ILIKE '%keyword%' OR answer ILIKE '%keyword%';


-- 3. TESTING REPORT METRICS
---------------------------------------------------------

-- Number of Sessions (Last 30 Days)
SELECT COUNT(DISTINCT session_id) FROM chat_messages WHERE created_at > NOW() - INTERVAL '30 days' AND is_dev = false;

-- Most Asked Questions (User Intent Approximation)
SELECT message as user_question, COUNT(*) as frequency 
FROM chat_messages 
WHERE role = 'user' AND is_dev = false
GROUP BY message 
ORDER BY frequency DESC 
LIMIT 10;

-- Total Fallbacks (Inferred from bot responses indicating uncertainty)
SELECT COUNT(*) as total_fallbacks 
FROM chat_messages 
WHERE role = 'assistant' 
  AND (message ILIKE '%sorry%' OR message ILIKE '%don''t know%' OR message ILIKE '%unable%');

-- Success Rate Percentage
-- Calculated as (1 - (Fallbacks / Total Assistant Messages)) * 100
SELECT 
    ROUND(((1 - (COUNT(*) FILTER (WHERE role = 'assistant' AND (message ILIKE '%sorry%' OR message ILIKE '%don''t know%'))::float / NULLIF(COUNT(*) FILTER (WHERE role = 'assistant'), 0))) * 100)::numeric, 2) as success_rate
FROM chat_messages;

-- User Interactivity (Messages per Session)
SELECT session_id, COUNT(*) as interactions, MAX(created_at) as created_at
FROM chat_messages 
GROUP BY session_id 
ORDER BY interactions DESC;

-- Hourly Interaction Heatmap (Distribution across 24 hours)
SELECT 
    EXTRACT(HOUR FROM created_at) as interaction_hour, 
    COUNT(*) as activity_count 
FROM chat_messages 
GROUP BY interaction_hour 
ORDER BY interaction_hour ASC;
