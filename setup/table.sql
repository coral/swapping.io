CREATE TABLE "session" (
    "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE TABLE "users" (
    id uuid PRIMARY KEY,
    username varchar (50) NOT NULL,
    email varchar (100) NOT NULL,
    password varchar (100) NOT NULL,
    salt varchar (100) NOT NULL,
    data jsonb
);

CREATE TABLE songs (
    id uuid PRIMARY KEY,
    name text
);

CREATE TABLE "entry" (
    id uuid PRIMARY KEY,
    filename uuid NOT NULL,
    extension varchar (20) NOT NULL,
    song uuid references songs(id),
    submitted timestamp(6) NOT NULL
);