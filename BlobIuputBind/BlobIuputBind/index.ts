import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log(context.bindings.inputBlob);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "done"
    };

};

export default httpTrigger;