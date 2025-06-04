-- Create auth schema
CREATE SCHEMA IF NOT EXISTS auth;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA auth TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA auth TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA auth TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA auth TO postgres, anon, authenticated, service_role;

-- Create auth.uid() function
CREATE OR REPLACE FUNCTION auth.uid() 
RETURNS INTEGER AS $$
  SELECT COALESCE(
    current_setting('request.jwt.claim.id', true)::INTEGER,
    (current_setting('request.jwt.claims', true)::jsonb->>'id')::INTEGER
  );
$$ LANGUAGE SQL STABLE;