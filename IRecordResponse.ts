import { IObjectRecordContainer } from "./ObjectRecord";

type IRecordsResponse = IRecordResponse | IUpdateResponse;
export default IRecordsResponse;

export interface IRecordResponse {
    outdated: false;
    records: IObjectRecordContainer;
}

export interface IUpdateResponse {
    outdated: true;
    progress: number;
    progressMessage: string;
}
