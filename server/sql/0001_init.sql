-- DAxis — initial schema
-- Run manually with:  psql $DATABASE_URL -f server/sql/0001_init.sql
-- Or just use `npm run db:generate && npm run db:migrate` from the root.

CREATE TABLE IF NOT EXISTS enquiries (
  id                BIGSERIAL    PRIMARY KEY,
  created_at        TIMESTAMPTZ  NOT NULL DEFAULT now(),
  full_name         TEXT         NOT NULL,
  email             TEXT         NOT NULL,
  phone             TEXT         NOT NULL,
  message           TEXT,
  company_name      TEXT,
  service_required  TEXT,
  city              TEXT,
  status            TEXT         NOT NULL DEFAULT 'new',
  source            TEXT         NOT NULL DEFAULT 'website'
);

CREATE INDEX IF NOT EXISTS enquiries_status_idx      ON enquiries (status);
CREATE INDEX IF NOT EXISTS enquiries_created_at_idx  ON enquiries (created_at);
