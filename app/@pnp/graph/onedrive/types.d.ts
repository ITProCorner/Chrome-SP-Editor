import { _GraphQueryableInstance, IGraphQueryableInstance, IGraphQueryableCollection, _GraphQueryableCollection } from "../graphqueryable";
import { Drive as IDriveType } from "@microsoft/microsoft-graph-types";
import { IGetById, IDeleteable, IUpdateable } from "../decorators";
/**
 * Describes a Drive instance
 *
 */
export declare class _Drive extends _GraphQueryableInstance<IDriveType> {
    get root(): IRoot;
    get list(): IGraphQueryableInstance;
    get recent(): IDriveItems;
    get sharedWithMe(): IDriveItems;
    getItemById(id: string): IDriveItem;
}
export interface IDrive extends _Drive {
}
export declare const Drive: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IDrive;
/**
 * Describes a collection of Drive objects
 *
 */
export declare class _Drives extends _GraphQueryableCollection<IDriveType[]> {
}
export interface IDrives extends _Drives, IGetById<IDrive> {
}
export declare const Drives: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IDrives;
/**
 * Describes a Root instance
 *
 */
export declare class _Root extends _GraphQueryableInstance<IDrive> {
    get children(): IDriveItems;
    search(query: string): Promise<any>;
    get thumbnails(): IGraphQueryableCollection;
}
export interface IRoot extends _Root {
}
export declare const Root: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IRoot;
/**
 * Describes a Drive Item instance
 *
 */
export declare class _DriveItem extends _GraphQueryableInstance<any> {
    get children(): IDriveItems;
    get thumbnails(): IGraphQueryableCollection;
    get versions(): IGraphQueryableCollection<IDriveItemVersionInfo>;
    move(parentReference: {
        id: "string";
    }, name: string): Promise<void>;
    getContent(): Promise<any>;
    setContent(content: any): Promise<{
        id: string;
        name: string;
        size: number;
    }>;
}
export interface IDriveItem extends _DriveItem, IDeleteable, IUpdateable {
}
export declare const DriveItem: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IDriveItem;
/**
 * Describes a collection of Drive Item objects
 *
 */
export declare class _DriveItems extends _GraphQueryableCollection {
}
export interface IDriveItems extends _DriveItems, IGetById<IDriveItem> {
}
export declare const DriveItems: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IDriveItems;
/**
 * IDriveItemAddResult
 */
export interface IDriveItemAddResult {
    data: any;
    driveItem: IDriveItem;
}
export interface IDriveItemVersionInfo {
    id: string;
    lastModifiedBy: {
        user: {
            id: string;
            displayName: string;
        };
    };
    lastModifiedDateTime: string;
    size: number;
}
//# sourceMappingURL=types.d.ts.map