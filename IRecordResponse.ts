import { IObjectRecordContainer } from "./ObjectRecord";
import IProgressInfo from './IProgressInfo';

type IRecordsResponse = IRecordResponse | IUpdateResponse;
export default IRecordsResponse;

export interface IRecordResponse {
    outdated: false;
    records: IObjectRecordContainer;
}

export interface IUpdateResponse {
    outdated: true;
    progress: IProgressInfo;
}
