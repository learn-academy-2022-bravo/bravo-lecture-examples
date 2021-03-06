# PostgreSQL 4/20/2022


General purpose languages - JS, Ruby
Domain specific - RSpec, HTML, SQL

SQL (Structured Query Language) - interact with databases, put data in table formats

PostgreSQL - flavor SQL, OOP

Check the version of PostgreSQL on your machine:
- $ `psql --version`
- `\l` - lists all the dbs
- `exit` to get back to file structure

PGAdmin - user interface for making queries to a PostgreSQL db
- Any password - SDlearn123
- Click into the side menu until you get to country
- Tool >> Query Tool


All the data:
```sql
SELECT * FROM country;
```

Limited data by reducing columns:
```sql
SELECT name, region, continent FROM country;
```

Limit:
```sql
SELECT name, region, continent
FROM country
LIMIT 5;
```

Where:
```sql
SELECT name, region, continent
FROM country
WHERE continent = 'North America';
```

```sql
SELECT name, region, continent
FROM country
WHERE continent != 'North America';
```

```sql
SELECT name, surfacearea
FROM country
WHERE surfacearea > 1e6;
(same as)
WHERE surfacearea > 1000000;
```

```sql
SELECT name, surfacearea, population
FROM country
WHERE surfacearea > 1e6
AND population > 1e6;
```

Like is a string matcher and using the wildcard operator (%):
```sql
SELECT name, continent, surfacearea, population
FROM country
WHERE continent LIKE '%America';
```

Order by:
```sql
SELECT name, region, indepyear
FROM country
ORDER BY indepyear
LIMIT 10;
```

Dealing with null values:
```sql
SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10;
```

Not like:
```sql
SELECT name, region, indepyear, continent
FROM country
WHERE continent NOT LIKE '%America'
ORDER BY indepyear DESC;
```
