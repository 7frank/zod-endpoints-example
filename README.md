# zod-endpoints-example

Example project for [zod-endpoints](https://github.com/flock-community/zod-endpoints)


# Notes:

Use cases that we'll test here:

 * [x] tests will generate a openapi schema json 
 * [x] run `yarn generate-api` to generate an example rtx-queries api stub
 * [ ] use openapi to start a  mock server e.g. [prism](https://stoplight.io/open-source/prism/)
 * [ ] start a dummy frontend that fetches data from some api routes on the mock server 


# showcase

quick n' dirty coding example showcasing power of zod & zod endpoints to manage openapi schemes via typescript
(in addition for a potential nodejs api service thiswill provide a basis for a validation middleware that enforces types at compile & runtime)

* `yarn` install dependencies
* `yarn test` will place an openapi schema.json inside generate folder
* `yarn generate-api` will generate an rtx-query api stub inside generated folder