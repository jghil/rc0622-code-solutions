select "g"."name" as "genres",
    count("cm".*) as "appeared in"
    from "genres" as "g"
    join "filmGenre" using ("genreId")
    join "films" using ("filmId")
    join "castMembers" as "cm" using ("filmId")
    join "actors" as "a" using ("actorId")
    where "a"."actorId" = 178
    group by "g"."name"
