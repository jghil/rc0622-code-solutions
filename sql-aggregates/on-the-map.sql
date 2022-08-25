select "co"."name" as "countries",
    count(*) as "cities"
    from "countries" as "co"
    join "cities" using ("countryId")
    group by "co"."name"
