import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {BlobServiceClient} from "@azure/storage-blob"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const blobClient = BlobServiceClient.fromConnectionString(process.env["MyStorageConnectionString"])
    const containerClinet = blobClient.getContainerClient('test-container')
    const currentDate = new Date();
    const year = currentDate.getUTCFullYear();
    const month = currentDate.getUTCMonth()+1;
    const day = currentDate.getUTCDate();
    const hour = currentDate.getUTCHours();
    const blockBlobClient = containerClinet.getBlockBlobClient(`year=${year}/month=${month}/day=${day}/hour=${hour}/test_${currentDate.getTime()}.csv`)
    const randomCsv = 'id,name\n1,John'
    await blockBlobClient.uploadData(Buffer.from(randomCsv),{blobHTTPHeaders:{blobContentType:'text/csv'}})
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: 'ok'
    };

};

export default httpTrigger;