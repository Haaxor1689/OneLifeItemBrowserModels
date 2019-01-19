import { IObjectRecordContainer } from "./ObjectRecord";
import IProgressInfo from './IProgressInfo';

type IRecordsResponse = IRecordResponse | IUpdateResponse;
export default IRecordsResponse;

export interface IRecordResponse {
    outdated: false;
}

export interface IUpdateResponse {
    outdated: true;
    progress: IProgressInfo;
}
