/*
  # Create dealers table

  1. New Tables
    - `dealers`
      - `id` (serial, primary key)
      - `name` (text)
      - `email` (text, unique)
      - `phone` (text)
      - `address` (text)
      - `credit_limit` (numeric)
      - `status` (varchar)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `dealers` table
    - Add policies for authenticated users
*/

CREATE TABLE IF NOT EXISTS dealers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    phone TEXT,
    address TEXT,
    credit_limit NUMERIC(12,2) DEFAULT 0,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS
ALTER TABLE dealers ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Authenticated users can view dealers"
    ON dealers
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Admin users can manage dealers"
    ON dealers
    USING (
        EXISTS (
            SELECT 1 FROM users 
            WHERE id = auth.uid() 
            AND role_id = 1  -- Admin role
        )
    );

-- Insert some sample dealers
INSERT INTO dealers (name, email, phone, address, credit_limit, status)
VALUES 
    ('NBA Company', 'nba@example.com', '1234567890', '123 Main St', 50000.00, 'active'),
    ('NFC Company', 'nfc@example.com', '0987654321', '456 Oak St', 75000.00, 'active')
ON CONFLICT DO NOTHING;