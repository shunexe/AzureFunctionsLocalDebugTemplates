import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const randomCsv = 'id,name\n1,John'

    context.bindings.outputBlob = randomCsv;

    context.res = {
        status: 200,
        headers: {
            "content-type": "text/csv"
        },
        body: "CSV created!"
    };

};

export default httpTrigger;