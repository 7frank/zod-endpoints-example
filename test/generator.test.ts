
import { schema } from "../src/schema";
import * as fs  from "fs"
import { openApi } from "zod-endpoints";

openApi


afterAll(() => {

});


test("parameter with number", async () => {

  // const servers= ServerObject[] = []

  const myOpenApiSchema = openApi(schema,{ title: "No title", version: "1.0.0" },[]);


  console.log(myOpenApiSchema)

  expect(myOpenApiSchema).toBeDefined()


  fs.writeFileSync("schema.json",JSON.stringify(myOpenApiSchema, null , '  ' ))

})