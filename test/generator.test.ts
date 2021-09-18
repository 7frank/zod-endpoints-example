
import { schema } from "../src/schema";
import * as fs  from "fs"
import { openApi } from "zod-endpoints";

test("generate openapi schema json for other code generator to pick up", async () => {

  const myOpenApiSchema = openApi(schema,{ title: "No title", version: "1.0.0" },[{url:"http:localhost:1337/api/vi",description:"an arbitrary nonexistsing url to appease the rtx-query codegenerator"}]);


  console.log(myOpenApiSchema)

  expect(myOpenApiSchema).toBeDefined()

  fs.writeFileSync("generated/schema.json",JSON.stringify(myOpenApiSchema, null , '  ' ))

})