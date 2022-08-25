select "a"."line1",
      "a"."district",
      "c"."name" as "city name",
      "co"."name" as "country name"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId") join "countries" as "co" using ("countryId")
