--
-- PostgreSQL database dump
--
-- Dumped from database version 11.2 (Debian 11.2-1.pgdg90+1)
-- Dumped by pg_dump version 11.2
SET
  statement_timeout = 0;
SET
  lock_timeout = 0;
SET
  idle_in_transaction_session_timeout = 0;
SET
  client_encoding = 'UTF8';
SET
  standard_conforming_strings = on;
SELECT
  pg_catalog.set_config('search_path', '', false);
SET
  check_function_bodies = false;
SET
  client_min_messages = warning;
SET
  row_security = off;
--
  -- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner:
  --
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
--
  -- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner:
  --
  COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
SET
  default_tablespace = '';
SET
  default_with_oids = false;
--
  -- Name: movie; Type: TABLE; Schema: public; Owner: postgres
  --
  CREATE TABLE IF NOT EXISTS public.movie (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL,
    "releaseYear" integer,
    rating integer
  );
ALTER TABLE
  public.movie OWNER TO postgres;
--
  -- Data for Name: movie; Type: TABLE DATA; Schema: public; Owner: postgres
  --
INSERT INTO
  public.movie (name, "releaseYear", rating)
VALUES
  ('Matrix', 1997, 9),
  ('Jurassic Park', 1993, 11),
  ('Jurassic Park 3', 1999, 2),
  ('Matrix 3', 2003, 4);
--
  -- PostgreSQL database dump complete
  --